import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../services/vendors.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from './../../../services/session.service';
import { environment } from '../../../../environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;
interface vendor{
  SKU: String,
  vendorID: String,
  productDescription: String,
  purchaseDate: string,
  lastPurchasePrice: Number,
  lastPurchasedQty: Number
}

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})


export class VendorsListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  vendorToDelete: String;
  vendorID: String;
  Total_cnt: number = 0;
  vendorsOrig: vendor[];
  vendors: vendor[];
  defaultOrder = [0, 'asc'];
  tableColumns = [
    { data: 'vendorID' },
    { data: 'SKU' },
    { data: 'productDescription' },
    { data: 'purchaseDate' },
    { data: 'lastPurchasePrice' },
    { data: 'lastPurchasedQty' },
    { data: 'delete' }
  ];
  columnDefsTarget = [6];
  constructor(private http: HttpClient, 
    private vendorService: VendorsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getVendorsData();
    
  }

  dateFormater(time:string) {
    if(!time || time == ""){
      return "No data"
    }
    var date = new Date(time);
    var day = date.getDate();
    var month: Number | String = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getVendorsData(){
    this.spinner.show();
    this.vendorService.getVendors().subscribe(
      (response: vendor[]) => {
        this.vendors = response.map(res => {
          res.purchaseDate = this.dateFormater(res.purchaseDate);
          return res;
        });
        this.vendorsOrig = this.vendors;
        this.Total_cnt = this.vendors.length;
      },
      error => {
        console.log(error);
      }
    )
    this.dtOptions = {
      pagingType: 'simple_numbers',
      serverSide: true,
      autoWidth: false,
      processing: false,
      lengthMenu: [50, 100, 150, 200],
      order: this.defaultOrder,
      ajax: (dataTablesParameters: any, callback) => {
        if (this.vendors) {
          const orderId = dataTablesParameters.order[0].column;
          const direction = dataTablesParameters.order[0].dir;
          const orderProperty = dataTablesParameters.columns[orderId].data;
          const searchString = dataTablesParameters.search.value;
          if (searchString !== "") { 
            this.vendors = this.vendorsOrig.filter(vendor => {
              const isVendorID = vendor.vendorID.search(searchString) > -1;
              const isSKU = vendor.SKU.search(searchString) > -1;
              const isProductDescription = vendor.productDescription.search(searchString) > -1;
              return isVendorID || isSKU || isProductDescription;
            });
          } else {
            this.vendors = this.vendorsOrig;
          }
          if (direction === "asc") {
            this.vendors.sort((a, b) => {
              if (orderId > 3) {
                return a[orderProperty] - b[orderProperty];
              }
              return a[orderProperty].localeCompare(b[orderProperty]);
            });
          } else {
            this.vendors.sort((a, b) => {
              if (orderId > 3) {
                return b[orderProperty] - a[orderProperty];
              }
              return b[orderProperty].localeCompare(a[orderProperty]);
            });
          }         
          this.Total_cnt = this.vendors.length;
        }
      },
      columns: this.tableColumns,
      columnDefs: [
        {
          targets: this.columnDefsTarget,
          searchable: false,
          orderable: false,
          visible: true
        },
        { width: '15%', targets: 1 },
        { width: '10%', targets: 3 },
        { width: '30%', targets: 4 },
        { width: '7%', targets: 5 },
        { width: '8%', targets: 6 }
      ],
      language: {
        emptyTable: 'No data available in table',
        loadingRecords: 'Please wait...',
        zeroRecords: 'No matching records found',
        lengthMenu: "Show _MENU_ entries of: "
      },
      drawCallback: (settings) => {
        $('#datTable_length').parent().removeClass('col-md-6').addClass('col-md-4');
        $('#datTable_filter').parent().removeClass('col-md-6').addClass('col-md-3');
        $('#datTable_filter').css('text-align', 'right');
      }
    };
    
    this.spinner.hide();
  }

  public closeModal() {
    $('#orderConfirmationModal').modal('hide');
    this.getVendorsData();
  }

  deleteTrue() {
    console.log(this.vendorToDelete);
    this.vendorService.deleteVendor(this.vendorToDelete).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
      () => this.closeModal()
    );
  }
  delete(id) {
    $("#orderConfirmationModal").modal("show");
    this.vendorToDelete = id;
  }
  
}
