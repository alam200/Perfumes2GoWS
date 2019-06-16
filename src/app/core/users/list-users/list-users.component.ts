import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SessionService } from '../../../services/session.service';
import { ProductsService } from '../../../services/products.service';
import { UsersService } from '../../../services/users.service';
import { OrderItem } from '../../../models/orderItem.model';
import { User } from '../../../models/user.model';
import { CartService } from '../../../services/cart.service';
import { InterceptorSkipHeader } from '../../../services/http.request.interceptor';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../../../common/alert/alert.service';
import { ConfirmationDialogService } from '../../../common/confirm/confirmation-dialog.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: User[];
  orderItem: OrderItem;
  userCategory = 'Customer';
  columnDefsTarget = [0, 5];
  defaultOrder = [3, 'asc']; // order by 'description asc'
  tableColumns = [
    { data: 'companyName' },
    { data: 'phoneNumber' },
    { data: 'mobileNumber' },
    { data: 'name' },
    { data: 'city' },
    { data: 'email' },
    { data: 'view' }
  ];
  public types = [];

  public selectedType = 'ALL';
  
  public userSubTotal = '0.00';
  
  private selTypeKey = 'selected_type';
  private searchTextKey = 'search_text';

  private selName = "";
  private selEmail = "";
  
  public constructor(private http: HttpClient,
    private usersService: UsersService,
    private cartService: CartService,
    private alertService: AlertService,
    private confirmationDialogService: ConfirmationDialogService,
    private location: Location,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    if (!this.session.isLoggedIn()) {
      const errmsg = 'You should login or create account';
      this.alertService.error(errmsg, true);
      this.router.navigate(['/user/login']);
    } else {
      if (this.session.retrieveUserCategory()) {
        this.userCategory = this.session.retrieveUserCategory();
      }
  
      if (this.userCategory === 'Admin') {
        this.tableColumns = [
          { data: 'companyName' },
          { data: 'phoneNumber' },
          { data: 'mobileNumber' },
          { data: 'name' },
          { data: 'city' },
          { data: 'email' },
          { data: 'view' }
        ];
      } else {
        // if user is customer
        if (this.cartService.getCartItems().length > 0) {
          this.defaultOrder = [7, 'asc'];
        }
      }

      Promise.all([
        this.getUsersData(), // default
      ]).then(() => {
        // restore Saved Filters
        const search: string = sessionStorage.getItem(this.searchTextKey);
        if (search) {
          if (search) {
            setTimeout(() => {
              $('#datTable_filter input[type=search]').val(search).trigger('input');
            }, 1500);
          }
        }
        // clear Filters
        sessionStorage.removeItem(this.selTypeKey);
        sessionStorage.removeItem(this.searchTextKey);
      });
    }
  }

  dateFormater(time:number) {
    if(!time || time == 0){
      return "No data"
    }
    var date = new Date(time);
    var day = date.getDate();
    var month: Number | String = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year = date.getFullYear();
    var hour: Number | String = date.getHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    var minute: Number | String = date.getMinutes();
    if (minute < 10) {
      minute = "0" + minute;
    }
    return `${day}/${month}/${year} ${hour}:${minute}`;
  }

  getUsersData() {
    this.spinner.show();
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    this.dtOptions = {
      pagingType: 'simple_numbers',
      serverSide: true,
      autoWidth: false,
      processing: false,
      lengthMenu: [50, 100, 150, 200],
      order: this.defaultOrder,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .get<DataTablesResponse>(
            environment.baseUrl + '/users', {
              headers: headers,
              params: {
                userCategory: this.userCategory,
                searchText: dataTablesParameters.search.value,
                type: this.selectedType,
                pageNo: dataTablesParameters.start + 1,
                recordsPerPage: dataTablesParameters.length,
                sdir: dataTablesParameters.order[0]['dir'],
                column: dataTablesParameters.columns[dataTablesParameters.order[0]['column']]['data']
              }
            }
          ).subscribe(resp => {
            this.spinner.hide();
            this.users = resp['userList'];

            this.users = this.users.map((user,index, User) => {
              user["lastLoging"] = this.dateFormater(user["lastLoging"]);
              user["created"] = this.dateFormater(user["created"]);
              return user;
            });

            // If user is a customer then don't show order with stock 0
            if (this.userCategory === 'Customer') {
            }
            this.users = this.users.map(function (o) {
              o['subtotal'] = 0;
              o['quanity'] = 0;
              return o;
            });

            callback({
              recordsTotal: resp['totalUsers'],
              recordsFiltered: resp['totalUsers'],
              data: []
            });
          }, error => {
            this.spinner.hide();
            console.log(error);
          });
      },
      columns: this.tableColumns,
      columnDefs: [
        {
          targets: this.columnDefsTarget,
          searchable: false,
          orderable: false,
          visible: true,
          width: '10%'
        }
      ],
      language: {
        emptyTable: 'No data available in table',
        loadingRecords: 'Please wait...',
        zeroRecords: 'No matching records found'
      },
      drawCallback: (settings) => {
        $('#datTable_length').parent().removeClass('col-md-6').addClass('col-md-4');
        $('#datTable_filter').parent().removeClass('col-md-6').addClass('col-md-3');
        $('#datTable_filter').css('text-align', 'right');
      }
    };
  }

  selectType(value) {
    this.selectedType = value;
    $('#datTable').DataTable().column('Type').search(this.selectedType).draw();
  }

  goEditUser(userCode) {
    const selectedType: string = this.selectedType;
    const searchText: string = $('#datTable_filter input[type=search]').val();
    // preserve Filters to SessionStorage
    //sessionStorage.setItem(this.selTypeKey, selectedType);
    sessionStorage.setItem(this.searchTextKey, searchText);
    // navigate
    this.router.navigate(['user-details', userCode]);
  }

  openConfirmationDialog(i,id,email, name) {
    
    this.confirmationDialogService.confirm("Please confirm data.", name, "("+email+")")
    .then(
      
      (confirmed) => {
          if (confirmed)
          {
            this.usersService.removeUser(id);
            this.users.splice(i, 1);
            this.alertService.success('Product deleted successfully.', true);
            setTimeout(() => {
                $("#datTable").DataTable().ajax.reload();
              //this.location.back();
            }, 500);
          }
          else
          {
           
          }
      })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
    // navigate
    //this.router.navigate(['product-details', sku]);
    //this.confirmService.success(sku, true);
    
  }
}
