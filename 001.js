apiready = function(){
    var header = $api.byId('header');
    $api.fixStatusBar(header);
    var pos = $api.offset(header);
    api.openFrame({
        name: 'checkin-con',
       url: 'http://baidu.weather.com.cn/mweather/101210201.shtml?t=1493909376',
        rect:{
            x: 0,
            y: pos.h,
            w: 'auto',
            h: 'auto'
        },
        bounces: true,
        vScrollBarEnabled: false
    });
};