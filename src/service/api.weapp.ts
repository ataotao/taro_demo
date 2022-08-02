export const auth = 'auth/v2.0/';
export const user = 'weapp/v2.0/';
export const user_21 = 'weapp/v2.1/';
export const user_22 = 'weapp/v2.2/';
export const gateway = 'gateway/v1.0/';

/**
 * 接口地址配置文件
 */
export const carmodel_detail = user + 'carmodel/detail';
export const carmodel_brands = user + 'carmodel/brands';
export const carmodel_keywords = user + 'carmodel/keywords';
export const carmodel_models = user + 'carmodel/models';
export const carmodel_conditions = user + 'carmodel/conditions';
export const carmodels_partsku = user + 'carmodels/partsku';
export const brand_categories = user + 'brand/categories';
export const category_parts = user + 'category/parts';
export const partskus_carmodel = user + 'partskus/carmodel';
export const partskus_gearbox_carmodel = user + 'partskus/gearbox/carmodel';
export const codes_keyword = user_21 + 'partskus/code';
export const partskus_oem = user + 'partskus/oem';
export const partskus_tenant = user + 'partskus/tenant';
export const partskus_indus = user + 'partskus/indus';
export const partskus_fms = user + 'partskus/fms';
export const partskus_exchange = user + 'partskus/exchange';
export const partsku = user + 'partsku';
export const partsku_exchanges = user + 'partsku/exchanges';
export const category_properties = user + 'category/properties';
export const carmodel_properties = user + 'carmodel/properties';
export const partskus_engineoil_carmodel = user + 'partskus/engineoil/carmodel';
export const carmodel_otheroil = user + 'carmodels/otheroil';
export const enginemodel_codes = user + 'enginemodel/codes';
export const partskus_engineoil_code = user + 'partskus/engineoil/code';
export const gearboxmodel_codes = user + 'gearboxmodel/codes';
export const partskus_gearbox_code = user + 'partskus/gearbox/code';
export const carmodel_upload_vinimg = user + 'carmodel/upload/vinimg';
export const mine = user + 'mine';
export const mine_message = user + 'mine/message';
export const mine_company_person = user + 'mine/company/person';
export const sys_area = user + 'sys/area';
export const mine_password = user + 'mine/password';
export const mine_account = user + 'mine/account';
export const mine_member = user + 'mine/member';
export const mine_logout = user + 'mine/logout';
export const mine_favorite_vins = user + 'mine/favorite/vins';
export const mine_favorite_vin = user + 'mine/favorite/vin';
export const mine_favorite_vin_edit = user + 'mine/favorite/vin/edit';
export const mine_favorite_vin_del = user + 'mine/favorite/vin/del';
export const sdk_config = user + 'sdk/config';

export const msg_records = user + 'msg/records';
export const msg_record = user + 'msg/record';

export const feedbacks = user + 'feedbacks';
export const feedback_images = user + 'feedback/images';
export const feedback_partsku = user + 'feedback/partsku';
export const feedback_partsku_process = user + 'feedback/partsku/process';
export const feedback_system = user + 'feedback/system';
export const feedback_system_process = user + 'feedback/system/process';
export const feedback_carmodel = user + 'feedback/carmodel';
export const feedback_carmodel_process = user + 'feedback/carmodel/process';

export const dealer_category_parts = user + 'dealer/category/parts';
export const dealer_partskus_carmodel = user + 'dealer/partskus/carmodel';
export const dealer_partsku = user + 'dealer/partsku';
export const dealer_partsku_exchanges = user + 'dealer/partsku/exchanges';
export const dealer_carmodels_partsku = user + 'dealer/carmodels/partsku';
export const dealer_codes_keyword = user_21 + 'dealer/partskus/code';
// export const dealer_codes_keyword_new = user + 'dealer/partskus/code/new';

export const dealer_partskus_indus = user + 'dealer/partskus/indus';
export const dealer_partskus_fms = user + 'dealer/partskus/fms';
export const dealer_partskus_tenant = user + 'dealer/partskus/tenant';
export const dealer_partskus_product = user + 'dealer/partskus/product';
export const dealer_partskus_exchange = user + 'dealer/partskus/exchange';
export const dealer_partskus_oem = user + 'dealer/partskus/oem';
export const dealer_partskus_gearbox_carmodel = user + 'dealer/partskus/gearbox/carmodel';
export const dealer_gearboxmodel_codes = user + 'dealer/gearboxmodel/codes';
export const dealer_partskus_gearbox_code = user + 'dealer/partskus/gearbox/code';
export const dealer_enginemodel_codes = user + 'dealer/enginemodel/codes';
export const dealer_partskus_engineoil_carmodel = user + 'dealer/partskus/engineoil/carmodel';
export const dealer_partskus_engineoil_code = user + 'dealer/partskus/engineoil/code';

export const company_type = user + 'company/type';
export const person_position = user + 'person/position';

/**
 * auth接口
 */
export const captcha_img = auth + 'captcha/img';
export const account = auth + 'account';
export const login_pwd = auth + 'login/pwd';
export const login_sms = auth + 'login/sms';
export const captcha_sms = auth + 'captcha/sms';
export const auth_url = auth + 'auth/url';
export const login_wechat_member = auth + 'login/wechat/member';
export const binding = auth + 'binding';
export const binding_member = auth + 'binding/member';
export const login_weapp_member = auth + 'login/weapp/member';
export const binding_weapp = auth + 'binding/weapp';
export const login_weapp_session = auth + 'login/weapp/session';
export const captcha_random = auth + 'captcha/random';
export const captcha_check = auth + 'captcha/check';

/** 数据统计 */
export const pvuv_statistic = gateway + 'pvuv/statistic';

/**
 * 机油及油液 engineoil
 */
export const engineoil_partskus_engine = user_21 + 'engineoil/partskus/engine';
export const dealer_engineoil_partskus_engine = user_22 + 'dealer/engineoil/partskus/engine';
export const engineoil_partskus_carmodel = user_21 + 'engineoil/partskus/carmodel';
export const dealer_engineoil_partskus_carmodel = user_22 + 'dealer/engineoil/partskus/carmodel';

/**
 * 发动机型号查询
 */
export const carmodel_search = user + 'carmodel/engine';

/**
 * 减振器
 */
export const damper_partskus_carmodel = user + 'damper/partskus/carmodel';
export const dealer_damper_partskus_carmodel = user + 'dealer/damper/partskus/carmodel';

export const damper_partskus_tenant = user + 'damper/partskus/tenant';
export const damper_partskus_exchange = user + 'damper/partskus/exchange';
export const damper_partskus_oem = user + 'damper/partskus/oem';
export const damper_partskus_fms = user + 'damper/partskus/fms';
export const dealer_damper_partskus_tenant = user + 'dealer/damper/partskus/tenant';
export const dealer_damper_partskus_exchange = user + 'dealer/damper/partskus/exchange';
export const dealer_damper_partskus_oem = user + 'dealer/damper/partskus/oem';
export const dealer_damper_partskus_fms = user + 'dealer/damper/partskus/fms';
export const damper_partsku = user + 'damper/partsku';
export const dealer_damper_partsku = user + 'dealer/damper/partsku';

/**
 * 差速器分动箱油
 */
export const gearoil_partskus_carmodel = user + 'gearoil/partskus/carmodel';
export const dealer_gearoil_partskus_carmodel = user + 'dealer/gearoil/partskus/carmodel';

/**
 * 轮胎
 */
export const tyre_size = user + 'tyre/size';
export const tyre_partskus_carmodel = user + 'tyre/partskus/carmodel';
export const dealer_tyre_partskus_carmodel = user + 'dealer/tyre/partskus/carmodel';
export const tyre_partskus_size = user + 'tyre/partskus/size';
export const dealer_tyre_partskus_size = user + 'dealer/tyre/partskus/size';

/**
 * 汽车灯泡
 */
export const lamp_partskus_carmodel = user + 'lamp/partskus/carmodel';
export const dealer_lamp_partskus_carmodel = user + 'dealer/lamp/partskus/carmodel';

/**
 * 雨刮
 */
export const wiper_partsku = user + 'wiper/partsku';
export const dealer_wiper_partsku = user + 'dealer/wiper/partsku';
export const wiper_partskus_carmodel = user + 'wiper/partskus/carmodel';
export const dealer_wiper_partskus_carmodel = user + 'dealer/wiper/partskus/carmodel';

/**
 * 个性化
 */
export const theme = user + 'theme';
export const theme_card = user + 'theme/card';

/**
 * VIN码
 */
export const carmodels_vin = user + 'carmodels/vin';
/** VIN码前8位校验 */
export const carmodels_vin_verification = user + 'carmodels/vin/verification';


/**
 * 销售应用
 */

export const cart = user + 'cart';
export const cart_del = user + 'cart/del';
export const carts = user + 'carts';
export const cart_count = user + 'cart/count';

export const address_del = user + 'address/del';
export const address_detail = user + 'address/detail';
export const addresses = user + 'addresses';
export const address = user + 'address';

export const order_pay = user + 'order/pay';
export const order_cancel = user + 'order/cancel';
export const order_prod_snapshots = user + 'order/prod/snapshots';
export const order_prod_snapshot = user + 'order/prod/snapshot';
export const order = user + 'order';
export const orders = user + 'orders';
export const order_status = user + 'order/status';
export const order_detail = user + 'order/detail';
export const order_count = user + 'order/count';
export const order_freight_amount = user + 'order/freight/amount';
export const after_sale = user + 'after/sale';
export const after_sale_img = user + 'after/sale/img';
export const generate_key = user + 'generate/key';
export const order_pay_status = user + 'order/pay/status';

/**
 * 消息通知
 */
export const msg_notice_title = user + 'msg/notice/title';
export const msg_notice_read = user + 'msg/notice/read';
export const msg_notice_read_all = user + 'msg/notice/read/all';
export const msg_notice_page = user + 'msg/notice/page';
export const msg_notice_detail = user + 'msg/notice/detail';
export const msg_notice_group = user + 'msg/notice/group';
export const partskus_page = user + 'partskus/page';
export const dealer_partskus_page = user + 'dealer/partskus/page';

/**
 * 销售应用 v1.3.0 云店首页
 */
export const products = user + 'products';


/**
 * 销售应用 v1.1.0--在搜配生态里区分商户和个人身份
 */
export const mine_upload_img = user + 'mine/upload/img';

/**
 * 用户端V2.1.2 查询不到产品时的提示区分乘/商用车
 */
export const carmodel_type = user + 'carmodel/type';

/** 是否开通商户号 */
export const wechat_mchid_status = user + 'wechat/mchid/status';

/** 品类线 V2.4.0：变速箱滤清器算改 */
export const dealer_gearboxfilter_partskus_gearbox = user + 'dealer/gearboxfilter/partskus/gearbox'; 
export const gearboxfilter_partskus_gearboxl = user + 'gearboxfilter/partskus/gearbox'; 
export const dealer_gearboxfilter_partskus_carmodel = user + 'dealer/gearboxfilter/partskus/carmodel'; 
export const gearboxfilter_partskus_carmodel = user + 'gearboxfilter/partskus/carmodel'; 

/** 品类线V2.5.0：机滤、火花塞算改 */
export const sparkplug_num = user + 'sparkplug/num'; 

/**1.1.8 获取自提地址 */
export const company_addres = user + 'company/address';
/**1.1.8 品牌、品类查商品 */
export const products_brand = user + 'products/brand';
