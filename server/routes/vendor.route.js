const express = require('express');
const router = express.Router();

const vendor_controller = require('../controllers/vendor.controller');

router.get('/', vendor_controller.vendors_list);
router.post('/create', vendor_controller.vendors_create);
router.get('/sku', vendor_controller.vendors_sku_list);
router.get('/:SKU/update', vendor_controller.vendor_update_get);
router.post('/:SKU/update', vendor_controller.vendor_update_post);


module.exports = router;