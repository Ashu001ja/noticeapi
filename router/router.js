const {getAllnotices,sendnotice,updateNotice,deleteNotice}=require('../controller/controller');

const express = require('express');

const router = express.Router();

router.route("/").get(getAllnotices);
router.route("/send").post(sendnotice);
router.route("/update/:id").patch(updateNotice);
router.route("/delete/:id").delete(deleteNotice);

module.exports = router;