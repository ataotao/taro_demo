import * as api from './api';
import { fetch } from './request';

/** 车型详情 */

// 品牌下品类列表
export const fetchCarmodelDetail = (data) => {
  return fetch({ url: api.carmodel_detail, data });
};
// 品牌下品类列表
export const fetchBrandCategories = (data) => {
  return fetch({ url: api.brand_categories, data });
};

// 获取车型品牌&热门标识&国别
export const fetchCarmodelBrands = () => {
  return fetch({ url: api.carmodel_brands });
};

// 根据品牌获取主机厂、车系、车型
export const fetchCarmodelModels = (data) => {
  return fetch({ url: api.carmodel_models, data });
};

// Carmodel - 车型搜索
export const fetchCarmodelKeywords = (data) => {
  return fetch({ url: api.carmodel_keywords, data });
};

// Carmodel - 车型条件 - 获取车型搜索条件(传cm_displacement获取版型数据;不传获取排量数据)
export const fetchCarmodelConditions = (data) => {
  return fetch({ url: api.carmodel_conditions, data });
};

/** 品类下产品列表 - 通过车型查询s */
export const fetchCategoryParts = (data) => {
  return fetch({ url: api.category_parts, data });
};

/** 品类下产品列表 - 通过车型查询(代理) */
export const fetchDealerCategoryParts = (data) => {
  return fetch({ url: api.dealer_category_parts, data });
};

/**
 * 根据车型查询对应品类配件 - 通过车型查询
 * @param {Object} data =>
 * @param {String} ten_category_id 商户品类ID
 * @param {String} category_id 品类ID
 * @param {String} cm_brand 车辆品牌
 * @param {String} cm_factory 车辆主机厂
 * @param {String} cm_model 车辆型号
 * @param {String} [可选] cm_ids 车型ID
 * @param {String} [可选] cm_displacement 排量
 * @param {String} [可选] cm_fuel_type 燃油类型
 */
export const fetchPartskusCarmodel = (data) => {
  return fetch({ url: api.partskus_carmodel, data });
};

/**
 * 根据车型查询对应品类配件 - 根据车型查询对应品类配件 - 通过车型查询(代理)
 * @param {Object} data =>
 * @param {String} dealer_category_id 经销商品类ID
 * @param {String} category_id 品类ID
 * @param {String} cm_brand 车辆品牌
 * @param {String} cm_factory 车辆主机厂
 * @param {String} cm_model 车辆型号
 * @param {String} [可选] cm_ids 车型ID
 * @param {String} [可选] cm_displacement 排量
 * @param {String} [可选] cm_fuel_type 燃油类型
 */

export const fetchDealerPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_partskus_carmodel, data });
};

// 获取产品对应的属性信息
export const fetchCategoryProperties = (data) => {
  return fetch({ url: api.category_properties, data });
};

// 获取对应品类的车型关键属性
export const fetchCarmodelProperties = (data) => {
  return fetch({ url: api.carmodel_properties, data });
};

// 通过车型条件查询变速箱服务配件
export const fetchPartskusGearboxCarmodel = (data) => {
  return fetch({ url: api.partskus_gearbox_carmodel, data });
};

// 通过车型条件查询变速箱服务配件(代理)
export const fetchDealerPartskusGearboxCarmodel = (data) => {
  return fetch({ url: api.dealer_partskus_gearbox_carmodel, data });
};

// 通过车型条件查询机油及油液服务配件
export const fetchPartskusEngineoilCarmodel = (data) => {
  return fetch({ url: api.partskus_engineoil_carmodel, data });
};

// 通过车型条件查询机油及油液服务配件(代理)
export const fetchDealerPartskusEngineoilCarmodel = (data) => {
  return fetch({ url: api.dealer_partskus_engineoil_carmodel, data });
};

// 获取配件详情
export const fetchPartsku = (data) => {
  return fetch({ url: api.partsku, data });
};

// 获取配件详情(代理)
export const fetchDealerPartsku = (data) => {
  return fetch({ url: api.dealer_partsku, data });
};

// 获取配件互换码数据
export const fetchPartskuExchanges = (data) => {
  return fetch({ url: api.partsku_exchanges, data });
};

// 获取配件互换码数据(代理)
export const fetchDealerPartskuExchanges = (data) => {
  return fetch({ url: api.dealer_partsku_exchanges, data });
};

// 获取适配车型
export const fetchCarmodelsPartsku = (data) => {
  return fetch({ url: api.carmodels_partsku, data });
};

// 获取适配车型(代理)
export const fetchDealerCarmodelsPartsku = (data) => {
  return fetch({ url: api.dealer_carmodels_partsku, data });
};

/**
 * 特殊油液获取加注量规格数据
 * @param {Object} params =>
 * @param {String} brand_category_code 品牌件编码
 * @param {String} cm_brand 车辆品牌
 * @param {String} cm_factory 车辆主机厂
 * @param {String} cm_model 车辆型号
 * @param {String} [可选] cm_ids 车型ID
 * @param {String} [可选] cm_displacement 排量
 * @param {String} [可选] cm_fuel_type 燃油类型
 */
export const fetchCarmodelOtheroil = (data) => {
  return fetch({ url: api.carmodel_otheroil, data });
};

// 获取VIN收藏夹
export const fetchMineFavoriteVins = (data) => {
  return fetch({ url: api.mine_favorite_vins, data });
};

// 获取VIN是否收藏
export const fetchMineFavoriteVin = (data) => {
  return fetch({ url: api.mine_favorite_vin, data });
};

// 新增vin收藏
export const fetchMineFavoriteVinAdd = (data) => {
  return fetch({ method: 'POST', url: api.mine_favorite_vin, data });
};

// 编辑vin收藏
export const fetchMineFavoriteVinEdit = (data) => {
  return fetch({ method: 'POST', url: api.mine_favorite_vin_edit, data });
};

// 删除vin收藏
export const fetchMineFavoriteVinDel = (data) => {
  return fetch({ method: 'POST', url: api.mine_favorite_vin_del, data });
};

// 编码搜索
export const fetchCodesKeyword = (data) => {
  return fetch({ url: api.codes_keyword, data });
};

// 编码搜索(代理)
export const fetchDealerCodesKeyword = (data) => {
  return fetch({ url: api.dealer_codes_keyword, data });
};

// 变速箱型号搜索
export const fetchGearboxmodelCodes = (data) => {
  return fetch({ url: api.gearboxmodel_codes, data });
};

// 变速箱型号搜索(代理)
export const fetchDealerGearboxmodelCodes = (data) => {
  return fetch({ url: api.dealer_gearboxmodel_codes, data });
};

// 发动机型号搜索
export const fetchEnginemodelCodes = (data) => {
  return fetch({ url: api.enginemodel_codes, data });
};

// 发动机型号搜索(代理)
export const fetchDealerEnginemodelCodes = (data) => {
  return fetch({ url: api.dealer_enginemodel_codes, data });
};

// 根据商户配件编码查询对应品类配件
export const fetchPartskusTenant = (data) => {
  return fetch({ url: api.partskus_tenant, data });
};

// 根据商户配件编码查询对应品类配件(代理)
export const fetchDealerPartskusTenant = (data) => {
  return fetch({ url: api.dealer_partskus_tenant, data });
};
// 根据商户配件编码查询对应品类商品
export const fetchDealerPartskusProduct = (data) => {
  return fetch({ url: api.dealer_partskus_product, data });
};

// 根据OE编码查询对应品类配件
export const fetchPartskusOem = (data) => {
  return fetch({ url: api.partskus_oem, data });
};

// 根据OE编码查询对应品类配件(代理)
export const fetchDealerPartskusOem = (data) => {
  return fetch({ url: api.dealer_partskus_oem, data });
};

// 根据行业配件编码查询对应品类配件
export const fetchPartskusIndus = (data) => {
  return fetch({ url: api.partskus_indus, data });
};

// 根据行业配件编码查询对应品类配件(代理)
export const fetchDealerPartskusIndus = (data) => {
  return fetch({ url: api.dealer_partskus_indus, data });
};

// 根据大厂配件编码查询对应品类配件
export const fetchPartskusFms = (data) => {
  return fetch({ url: api.partskus_fms, data });
};

// 根据大厂配件编码查询对应品类配件(代理)
export const fetchDealerPartskusFms = (data) => {
  return fetch({ url: api.dealer_partskus_fms, data });
};

// 根据互换码查询对应品类配件
export const fetchPartskusExchange = (data) => {
  return fetch({ url: api.partskus_exchange, data });
};

// 根据互换码查询对应品类配件(代理)
export const fetchDealerPartskusExchange = (data) => {
  return fetch({ url: api.dealer_partskus_exchange, data });
};

// 根据车型品牌和发动机型号查询出机油产品列表
export const fetchPartskusEngineoilCode = (data) => {
  return fetch({ url: api.partskus_engineoil_code, data });
};

// 根据车型品牌和发动机型号查询出机油产品列表(代理)
export const fetchDealerPartskusEngineoilCode = (data) => {
  return fetch({ url: api.dealer_partskus_engineoil_code, data });
};

// 根据车型品牌和发动机型号查询出变速箱产品列表
export const fetchPartskusGearboxCode = (data) => {
  return fetch({ url: api.partskus_gearbox_code, data });
};

// 根据车型品牌和发动机型号查询出变速箱产品列表(代理)
export const fetchDealerPartskusGearboxCode = (data) => {
  return fetch({ url: api.dealer_partskus_gearbox_code, data });
};

// 个人信息
export const fetchMine = (data) => {
  return fetch({ url: api.mine, data });
};

// 消息通知
export const fetchMineMessage = (data) => {
  return fetch({ url: api.mine_message, data });
};

// 车型反馈
export const fetchFeedbackCarmodel = (data) => {
  return fetch({ method: 'POST', url: api.feedback_carmodel, data });
};

// 产品反馈
export const fetchFeedbackPartsku = (data) => {
  return fetch({ method: 'POST', url: api.feedback_partsku, data });
};

// 功能反馈
export const fetchFeedbackSystem = (data) => {
  return fetch({ method: 'POST', url: api.feedback_system, data });
};

// 反馈记录
export const fetchFeedbacks = (data) => {
  return fetch({ url: api.feedbacks, data });
};

// 车型反馈回复列表
export const fetchFeedbackCarmodelProcess = (data) => {
  return fetch({ url: api.feedback_carmodel_process, data });
};

// 车型反馈回复
export const fetchFeedbackCarmodelProcessPost = (data) => {
  return fetch({ method: 'POST', url: api.feedback_carmodel_process, data });
};

// 产品反馈回复列表
export const fetchFeedbackPartskuProcess = (data) => {
  return fetch({ url: api.feedback_partsku_process, data });
};

// 产品反馈回复
export const fetchFeedbackPartskuProcessPost = (data) => {
  return fetch({ method: 'POST', url: api.feedback_partsku_process, data });
};

// 系统反馈回复列表
export const fetchFeedbackSystemProcess = (data) => {
  return fetch({ url: api.feedback_system_process, data });
};

// 系统反馈回复
export const fetchFeedbackSystemProcessPost = (data) => {
  return fetch({ method: 'POST', url: api.feedback_system_process, data });
};

// 申请会员
export const fetchMineMember = () => {
  return fetch({ method: 'POST', url: api.mine_member });
};

// 发送验证码
export const fetchCaptchaSms = (data) => {
  return fetch({ method: 'POST', url: api.captcha_sms, data });
};

// 账号校验
export const fetchAccount = (data) => {
  return fetch({ url: api.account, data });
};

// 修改绑定手机号
export const fetchMineAccount = (data) => {
  return fetch({ method: 'POST', url: api.mine_account, data });
};

// 获取消息记录列表
export const fetchMsgRecords = (data) => {
  return fetch({ url: api.msg_records, data });
};
// 消息读取
export const fetchMsgRecord = (data) => {
  return fetch({ method: 'POST', url: api.msg_record, data });
};

// 获取省市区数据
export const fetchSysArea = (data) => {
  return fetch({ url: api.sys_area, data });
};

// 获取个人信息
export const fetchMineCompanyPerson = (data) => {
  return fetch({ url: api.mine_company_person, data });
};

// 保存个人信息
export const fetchMineCompanyPersonPost = (data) => {
  return fetch({ method: 'POST', url: api.mine_company_person, data });
};

// 设置密码
export const fetchMinePassword = (data) => {
  return fetch({ method: 'POST', url: api.mine_password, data });
};

// 退出登录
export const fetchMineLogout = () => {
  return fetch({ method: 'POST', url: api.mine_logout });
};

// 公司类型
export const fetchCompanyType = (data) => {
  return fetch({ url: api.company_type, data });
};

// 职位
export const fetchPersonPosition = (data) => {
  return fetch({ url: api.person_position, data });
};

/**
 * auth
 */

export const fetchLoginWeappMember = (data) => {
  return fetch({ method: 'POST', url: api.login_weapp_member, data });
};

export const fetchBindingWeapp = (data) => {
  return fetch({ method: 'POST', url: api.binding_weapp, data });
};

export const fetchLoginWeappSession = (data) => {
  return fetch({ method: 'POST', url: api.login_weapp_session, data });
};

/** 数据统计 */
/** PV|UV上报 */
export const fetchPvuvStatistic = (data) => {
  return fetch({ url: api.pvuv_statistic, data });
};

/**
 * 机油及油液 engineoil
 */

export const fetchCarmodelSearch = (data) => {
  return fetch({ url: api.carmodel_search, data });
};

export const fetchEngineoilPartskusEngine = (data) => {
  return fetch({ url: api.engineoil_partskus_engine, data });
};

export const fetchDealerEngineoilPartskusEngine = (data) => {
  return fetch({ url: api.dealer_engineoil_partskus_engine, data });
};

export const fetchEngineoilPartskusCarmodel = (data) => {
  return fetch({ url: api.engineoil_partskus_carmodel, data });
};

export const fetchDealerEngineoilPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_engineoil_partskus_carmodel, data });
};

/**
 * 减振器
 * @param {Object} data =>
 * @param {String} ten_category_id 商户品类ID
 * @param {String} cm_brand 车辆品牌
 * @param {String} cm_factory 车辆主机厂
 * @param {String} cm_model 车辆型号
 * @param {String} [可选] cm_ids 车型ID
 * @param {String} [可选] cm_displacement 排量
 * @param {String} [可选] cm_fuel_type 燃油类型
 */
export const fetchDamperPartskusCarmodel = (data) => {
  return fetch({ url: api.damper_partskus_carmodel, data });
};

/**
 * 减振器 [经销商]
 * @param {Object} data =>
 * @param {String} dealer_category_id 经销商品类ID
 * @param {String} cm_brand 车辆品牌
 * @param {String} cm_factory 车辆主机厂
 * @param {String} cm_model 车辆型号
 * @param {String} [可选] cm_ids 车型ID
 * @param {String} [可选] cm_displacement 排量
 * @param {String} [可选] cm_fuel_type 燃油类型
 */
export const fetchDealerDamperPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_damper_partskus_carmodel, data });
};

export const fetchDamperPartskusOem = (data) => {
  return fetch({ url: api.damper_partskus_oem, data });
};

export const fetchDamperPartskusFms = (data) => {
  return fetch({ url: api.damper_partskus_fms, data });
};

export const fetchDamperPartskusExchange = (data) => {
  return fetch({ url: api.damper_partskus_exchange, data });
};

export const fetchDamperPartskusTenant = (data) => {
  return fetch({ url: api.damper_partskus_tenant, data });
};

export const fetchDealerDamperPartskusOem = (data) => {
  return fetch({ url: api.dealer_damper_partskus_oem, data });
};

export const fetchDealerDamperPartskusFms = (data) => {
  return fetch({ url: api.dealer_damper_partskus_fms, data });
};

export const fetchDealerDamperPartskusExchange = (data) => {
  return fetch({ url: api.dealer_damper_partskus_exchange, data });
};

export const fetchDealerDamperPartskusTenant = (data) => {
  return fetch({ url: api.dealer_damper_partskus_tenant, data });
};

export const fetchDamperPartsku = (data) => {
  return fetch({ url: api.damper_partsku, data });
};

export const fetchDealerDamperPartsku = (data) => {
  return fetch({ url: api.dealer_damper_partsku, data });
};

export const fetchGearoilPartskusCarmodel = (data) => {
  return fetch({ url: api.gearoil_partskus_carmodel, data });
};

export const fetchDealerGearoilPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_gearoil_partskus_carmodel, data });
};

/**
 * 轮胎
 */

export const fetchTyreSize = (data) => {
  return fetch({ url: api.tyre_size, data });
};

export const fetchTyrePartskusCarmodel = (data) => {
  return fetch({ url: api.tyre_partskus_carmodel, data });
};

export const fetchDealerTyrePartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_tyre_partskus_carmodel, data });
};

export const fetchTyrePartskusSize = (data) => {
  return fetch({ url: api.tyre_partskus_size, data });
};

export const fetchDealerTyrePartskusSize = (data) => {
  return fetch({ url: api.dealer_tyre_partskus_size, data });
};

/**
 * 车灯
 */

export const fetchLampPartskusCarmodel = (data) => {
  return fetch({ url: api.lamp_partskus_carmodel, data });
};

export const fetchDealerLampPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_lamp_partskus_carmodel, data });
};

/**
 * 雨刮
 */

export const fetchWiperPartsku = (data) => {
  return fetch({ url: api.wiper_partsku, data });
};

export const fetchDealerWiperPartsku = (data) => {
  return fetch({ url: api.dealer_wiper_partsku, data });
};

export const fetchWiperPartskusCarmodel = (data) => {
  return fetch({ url: api.wiper_partskus_carmodel, data });
};

export const fetchDealerWiperPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_wiper_partskus_carmodel, data });
};

/**
 * 个性化
 */
export const fetchTheme = () => {
  return fetch({ url: api.theme });
};
export const fetchThemeCard = () => {
  return fetch({ url: api.theme_card });
};

// 品类下产品列表 - 通过VIN码搜车型
export const fetchCarmodelsVin = (data) => {
  return fetch({ url: api.carmodels_vin, data });
};

/**
 * VIN码前8位校验
 */
export const fetchCarmodelsVinVerification = (data) => {
  return fetch({ url: api.carmodels_vin_verification, data });
};

// 验证码
export const fetchCaptchaRandom = (data) => {
  return fetch({ url: api.captcha_random, data });
};
export const fetchCaptchaCheck = (data) => {
  return fetch({ method: 'POST', url: api.captcha_check, data });
};

/**
 * 销售应用 购物车
 */

/** 商品加入购物车 */
export const fetchCart = (data) => {
  return fetch({ method: 'POST', url: api.cart, data });
};

/** 商品从购物车中删除 */
export const fetchCartDel = (data) => {
  return fetch({ method: 'POST', url: api.cart_del, data });
};

/** 获取购物车 */
export const fetchCarts = (data) => {
  return fetch({ url: api.carts, data });
};

/** 获取购物车数量 */
export const fetchCartCount = (data) => {
  return fetch({ url: api.cart_count, data });
};

/**
 * 销售应用 地址管理
 */

/** 删除客户地址信息 */
export const fetchAddressDel = (data) => {
  return fetch({ method: 'POST', url: api.address_del, data });
};

/** 添加/编辑客户地址信息 */
export const fetchAddressEdit = (data) => {
  return fetch({ method: 'POST', url: api.address, data });
};

/** 获取单个地址详情 */
export const fetchAddressDetail = (data) => {
  return fetch({ url: api.address_detail, data });
};

/** 获取客户地址信息列表 */
export const fetchAddresses = (data) => {
  return fetch({ url: api.addresses, data });
};

/**
 * 销售应用-订单
 */

/** 添加/编辑客户地址信息 */
export const fetchOrderPay = (data) => {
  return fetch({ method: 'POST', url: api.order_pay, data });
};

/** 取消订单 */
export const fetchOrderCancel = (data) => {
  return fetch({ method: 'POST', url: api.order_cancel, data });
};

/** 商品快照列表 */
export const fetchOrderProdSnapshots = (data) => {
  return fetch({ url: api.order_prod_snapshots, data });
};

/** 商品快照详情 */
export const fetchOrderProdSnapshot = (data) => {
  return fetch({ url: api.order_prod_snapshot, data });
};

/** 提交订单 */
export const fetchOrder = (data) => {
  return fetch({ method: 'POST', url: api.order, data });
};

/** 获取订单各分类订单列表 */
export const fetchOrders = (data) => {
  return fetch({ url: api.orders, data });
};

/** 确认收货(更改订单状态) */
export const fetchOrderStatus = (data) => {
  return fetch({ method: 'POST', url: api.order_status, data });
};

/** 获取订单状态 */
export const fetchGetOrderStatus = (data) => {
  return fetch({ url: api.order_status, data });
};

/** 获取单个订单详情页 */
export const fetchOrderDetail = (data) => {
  return fetch({ url: api.order_detail, data });
};

/** 获取我的订单各分类数量 */
export const fetchOrderCount = (data) => {
  return fetch({ url: api.order_count, data });
};

/** 获取订单运费 */
export const fetchOrderFreightAmount = (data) => {
  return fetch({ method: 'POST', url: api.order_freight_amount, data });
};

/** 申请售后 */
export const fetchAfterSale = (data) => {
  return fetch({ method: 'POST', url: api.after_sale, data });
};

/** 生成UUID */
export const fetchGenerateKey = (data) => {
  return fetch({ url: api.generate_key, data });
};

/** 获取订单支付状态 */
export const fetchOrderPayStatus = (data) => {
  return fetch({ url: api.order_pay_status, data });
};

/**
 * 消息通知
 */

/** 首页消息 */
export const fetchMsgNoticeTitle = (data) => {
  return fetch({ url: api.msg_notice_title, data });
};

/** 新品上市消息读取 */
export const fetchMsgNoticeRead = (data) => {
  return fetch({ method: 'POST', url: api.msg_notice_read, data });
};

/** 全部消息读取 */
export const fetchMsgNoticeReadAll = (data) => {
  return fetch({ method: 'POST', url: api.msg_notice_read_all, data });
};

/** 新品上市消息通知查询 */
export const fetchMsgNoticePage = (data) => {
  return fetch({ url: api.msg_notice_page, data });
};

/** 新品上市消息通知详情 */
export const fetchMsgNoticeDetail = (data) => {
  return fetch({ url: api.msg_notice_detail, data });
};

/** 消息分组 */
export const fetchMsgNoticeGroup = (data) => {
  return fetch({ url: api.msg_notice_group, data });
};

/** 产品目录列表 */
export const fetchPartskusPage = (data) => {
  return fetch({ url: api.partskus_page, data });
};

/** 产品目录列表 代理经销 */
export const fetchDealerPartskusPage = (data) => {
  return fetch({ url: api.dealer_partskus_page, data });
};

/**
 * 销售应用 v1.3.0 云店首页
 */

/** 首页产品推荐 product_type NEW: 新品 BEST_SELL 畅销*/
export const fetchProducts = (data) => {
  return fetch({ url: api.products, data });
};

/**
 * 用户端V2.1.2 查询不到产品时的提示区分乘/商用车
 */

/** 车俩类型 car_type = passenger_vehicle(乘用车)、commercial_vehicle(商用车) */
export const fetchCarmodelType = (data) => {
  return fetch({ url: api.carmodel_type, data });
};

/** 是否开通商户号 */
export const fetchWechatMchidStatus = (data) => {
  return fetch({ url: api.wechat_mchid_status, data });
};

/** 品类线 V2.4.0：变速箱滤清器算改 */
export const fetchDealerGearboxfilterPartskusGearbox = (data) => {
  return fetch({ url: api.dealer_gearboxfilter_partskus_gearbox, data });
};
export const fetchGearboxfilterPartskusGearboxl = (data) => {
  return fetch({ url: api.gearboxfilter_partskus_gearboxl, data });
};
export const fetchDealerGearboxfilterPartskusCarmodel = (data) => {
  return fetch({ url: api.dealer_gearboxfilter_partskus_carmodel, data });
};
export const fetchGearboxfilterPartskusCarmodel = (data) => {
  return fetch({ url: api.gearboxfilter_partskus_carmodel, data });
};

/** 品类线V2.5.0：机滤、火花塞算改 */
export const fetchSparkplugNum = (data) => {
  return fetch({ url: api.sparkplug_num, data });
};

/** 1.1.8获取自提地址 */
export const fetchCompanyAddres = (data) => {
  return fetch({ url: api.company_addres, data });
};
/** 1.1.8 品牌、品类查商品 */
export const fetchDealerPartskuBrand = (data) => {
  return fetch({ url: api.products_brand, data });
};
