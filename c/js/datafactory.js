/**				
* json测试数据生成
* @class datafactory json测试数据生成
* @constructor
* @version 1.0
* @author lxx
* @requires c/js/underscore.js
* @requires c/js/chance.js
* @requires c/js/datafactory.js
*/

(function($){
	than = this;
	/**
	*日期格式化
	*@param{Date} 日期date对象
	*@param{String} 格式化标准
	*return 返回格式化后的字符串;
	*/
	dateformat = function(date,mask) {     
    	if (mask == null || mask==undefined || mask=="") {
    		mask="YYYY-MM-dd";
    	};
	    var d = date;     
	    
	    var zeroize = function (value, length) {     
	    
	        if (!length) length = 2;     
	    
	        value = String(value);     
	    
	        for (var i = 0, zeros = ''; i < (length - value.length); i++) {     
	    
	            zeros += '0';     
	    
	        }     
	    
	        return zeros + value;     
	    
	    };       
	    
	    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|YY(?:YY)?|([hHMstT])\1?|[lLZ])\b/g, function($0) {     
	    
	        switch($0) {     
	    
	            case 'd':   return d.getDate();     
	    
	            case 'dd':  return zeroize(d.getDate());     
	    
	            case 'ddd': return ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'][d.getDay()];     
	    
	            case 'dddd':    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];     
	    
	            case 'M':   return d.getMonth() + 1;     
	    
	            case 'MM':  return zeroize(d.getMonth() + 1);     
	    
	            case 'MMM': return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];     
	    
	            case 'MMMM':    return ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];     
	    
	            case 'yy':  return String(d.getFullYear()).substr(2);     
	    
	            case 'yyyy': return d.getFullYear();     

	            case 'YY':  return String(d.getFullYear()).substr(2);

	     		case 'YYYY': return d.getFullYear(); 

	            case 'h':   return d.getHours() % 12 || 12;     
	    
	            case 'hh':  return zeroize(d.getHours() % 12 || 12);     
	    
	            case 'H':   return d.getHours();     
	    
	            case 'HH':  return zeroize(d.getHours());     
	    
	            case 'm':   return d.getMinutes();     
	    
	            case 'mm':  return zeroize(d.getMinutes());     
	    
	            case 's':   return d.getSeconds();     
	    
	            case 'ss':  return zeroize(d.getSeconds());     
	    
	            case 'l':   return zeroize(d.getMilliseconds(), 3);     
	    
	            case 'L':   var m = d.getMilliseconds();     
	    
	                    if (m > 99) m = Math.round(m / 10);     
	    
	                    return zeroize(m);     
	    
	            case 'tt':  return d.getHours() < 12 ? 'am' : 'pm';     
	    
	            case 'TT':  return d.getHours() < 12 ? 'AM' : 'PM';     
	    
	            case 'Z':   return d.toUTCString().match(/[A-Z]+$/);     
	    
	            default:    return $0.substr(1, $0.length - 2);     
	    
	        }     
	    
	    });     
	    
	}; 
	/**
	* 获取bool随机值
	* return bool值
	*/
	than.getbool = function(){
		return chance.bool();
	}
	/**
	* 获取guid随机值
	* return guid值
	*/
	than.getguid = function(){
		return chance.guid();
	}
	/**
	* 获取email
	* @param{string} opt 生成的email域名
	* return eamil
	*/
	than.getemail =function(opt){
		
		if(opt!=null && opt != undefined){
			return chance.email({domain:opt});
		}else{
			return chance.email();
		}
	}
	/**
	* 获取姓名
	* return 姓名
	*/
	than.getname = function(){
		
		var index = chance.integer({min:0,max:(namelist.length-1)});
		return namelist[index];
	}
	/**
	* 获取性别
	* return 性别
	*/
	than.getgender = function(){
		var index = chance.integer({min:0,max:1});
		return genderlist[index];
	}
	/**
	* 获取电话
	* return 电话号码
	*/
	than.getphone = function(){
		return chance.natural({min: 10000000, max: 99999999}).toString();
	}
	/**
	* 获取移动电话
	* @param{String} code 1--移动 2--联通 3--电信 其它 或者 不填为 全部
	* return 移动电话号码
	*/
	than.getmobilephone = function(code){
		var index = 0;
		var subscriber = chance.natural({min: 10000000, max: 99999999}).toString();
		if(code == "1"){
			var index =chance.natural({min: 0, max: (CMCC.length-1)});
			return CMCC[index]+subscriber;
		}else if (code == "2") {
			var index =chance.natural({min: 0, max: (CUCC.length-1)});
			return CUCC[index]+subscriber;
		}else if (code == "3") {
			var index =chance.natural({min: 0, max: (CTCC.length-1)});
			return CTCC[index]+subscriber;
		}else{
			var index =chance.natural({min: 0, max: (CC.length-1)});
			return CC[index]+subscriber;
		}
	}
	/**
	* 获取格式化后的日期
	* @param{String} 格式化标准
	* return 格式化后的日期
	*/
	than.getDate = function(mask){
		var date = new Date( parseInt(chance.year({min: 1970, max: 2100})),chance.integer({min:0, max: 12}),chance.integer({min:0, max: 28}), chance.hour(),chance.minute(),chance.integer({min:0, max: 60}));
		return dateformat(date,mask);
	}
	/**
	* 随机数
	* @param{Object} {min:1,max:1} 随机数区间
	* return 随机数
	*/
	than.getnumeric = function(numberOpt){
		if(/\./.test(JSON.stringify(numberOpt))){ //如果有点意图为非整数
			return chance.floating(numberOpt);
		}else{
			return chance.integer(numberOpt);
		}
	
	}
	/**
	*正则匹配对象
	*/
	labelmatching={
 		//匹配 {{repeat(1到9999的数字)}} 或 {{repeat(1到9999的数字,1到9999的数字)}}
 		repeat : /{{repeat\(\s*([1-9]\d{0,3}\s*)(,\s*[1-9]\d{0,3}){0,1}\s*\)}}/,
 		//匹配 guid
 		guid : /{{guid}}/g,
 		//匹配 bool
		bool : /{{bool}}/g,
		//匹配 index 自增长
		index : /{{index}}/g,
		//匹配姓名
		name :/{{name}}/g,
		//匹配email
		email : /{{email(\([^\)]+\))?}}/g,
		//匹配phone
		phone :/{{phone}}/g,
		//移动电话 不填写括号为全部 1--移动 2--联通 3--电信 多个逗号分隔
		mobilephone:/{{mobilephone(\([^\)]+\))?}}/g,
		//匹配性别
		gender:/{{gender}}/g,
		//匹配日期
		date : /{{date\([^\)]+\)?}}/g,
		//匹配随机数
		numeric : /{{numeric\([^\)]+\)}}/g
 	}
 	/**
 	*正则方法对象
 	*/
 	screeningOfMatching={
 		//获取括号内内容
	 		parentheses : /\([^\)]+\)/g,
		//获取所有数字
	 		number_ : /([+-]?)\d*\.?\d+/g
 	}
	TestingDataOut = {
	 

	 	/**
	 	* 初始化方法
	 	* param{String} 需要解析的json字符串
	 	*/
	 	init : function(jsonVal){

			return tempdata=TestingDataOut.dataOutput(JSON.parse(jsonVal));
			//console.log(tempdata);
			//console.log(JSON.stringify(tempdata))
	 	},
	 	/**
	 	*获取替换的数据
	 	*param{String} str 需要解析替换的标签
	 	*param{Number} i 用于index
	 	*/
	 	getRepData : function(str,i){
	 		//为了操蛋的ie兼容 不能对象打点的方式获取 正则内容 否则会出问题
	 			if (/{{guid}}/g.test(str)) { //guid
 					str = str.replace(labelmatching.guid,than.getguid())
				}
				if (/{{index}}/g.test(str)) { //index
					str = str.replace(labelmatching.index,i+1)
				}
				if (/{{bool}}/g.test(str)) { //bool
					str = str.replace(labelmatching.bool,than.getbool());
				}
				if (/{{email(\([^\)]+\))?}}/g.test(str)) {//email
					str = str.replace(labelmatching.email,function(data){
						var opt = data.match(/\((.*?)\)/); 
						if (opt != null && opt != undefined) {
						
							opt = opt[1];
						}
						return than.getemail(opt);
					})
				};
				if (/{{name}}/g.test(str)) {
					str = str.replace(labelmatching.name,than.getname);
				};
				if (/{{gender}}/g.test(str)) {
					str = str.replace(labelmatching.gender,than.getgender);
				};
				if (/{{phone}}/g.test(str)) {
					str = str.replace(labelmatching.phone,than.getphone);
				};
				if (/{{mobilephone(\([^\)]+\))?}}/g.test(str)) {
					str = str.replace(labelmatching.mobilephone,function(data){
						var opt = data.match(/\((.*?)\)/); 
						if (opt != null && opt != undefined) {
							opt = opt[1];
						}
						return than.getmobilephone(opt);
					})
				};
				if (/{{date\([^\)]+\)?}}/g.test(str)) {
					str = str.replace(labelmatching.date,function(data){
						var opt = data.match(/\((.*?)\)/); 
						if (opt != null && opt != undefined) {
							opt = opt[1];
						}
						return than.getDate(opt);
					})
				};
				if (/{{numeric\([^\)]+\)}}/g.test(str)) {
					str = str.replace(labelmatching.numeric,function(data){
						var numberOpt={
							min:1,
							max:1
						}
						var x = data.match(screeningOfMatching.number_);
						$.each(x,function(index, el) {
							if(/\./.test(el)){
								x[index] = 	parseFloat(el);
							}else{
								x[index] = 	parseInt(el);
							}
							
						});
						numberOpt.min=_.min(x);
						numberOpt.max=_.max(x);
						
						return than.getnumeric(numberOpt);
					})
				};
				return str;
	 	},
		/**
		* 测试数据输出
		*/
		dataOutput : function(jsonVal){
			var numberOpt={
				min:1,
				max:1
			}
			//var jsonString = jsonVal;
			//var jsonObj = JSON.parse(jsonString);
			//console.log()
			var jsonObj = jsonVal;
			var typejson = $.type(jsonObj);
			var testData;
			if( typejson === 'array'){
				testData = [];
				if( $.type(jsonObj[0]) ==='string' ){
					if (labelmatching.repeat.test(jsonObj[0])) {
						
						var x = jsonObj[0].match(screeningOfMatching.number_);
						$.each(x,function(index, el) {
							x[index] = 	parseInt(el);
						});
						numberOpt.min=_.min(x);
						numberOpt.max=_.max(x);
						var iterations = chance.integer(numberOpt);
						for (var i = 0; i < iterations; i++) {
							var object = {};
							//TODO 这里判断一下 jsonObj 类型. 如果是String 直接循环
							if ($.type(jsonObj[1])==='object') {
								$.each(jsonObj[1], function(key, val) {
									if ( $.type(val) ==='array') {
										object[key] = TestingDataOut.dataOutput(val);
									}else{
										object[key] = TestingDataOut.getRepData(val,i);	
									}	
								});
								testData.push(object)
							}else if ($.type(jsonObj[1])==='string') {
								testData.push(TestingDataOut.getRepData(jsonObj[1],i));
							};
							
								
						};	
					};		
				}
			}else if (typejson ==='object') {
				testData = {};
				$.each(jsonObj, function(key, val) {
					if ( $.type(val) ==='array') {
						testData[key] = TestingDataOut.dataOutput(val);
					}else{
						testData[key] = val;
					}	
				});
			};
			return testData;
		}
	};
}(jQuery))