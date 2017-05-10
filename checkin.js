apiready = function(){
    var header = $api.byId('header');
    $api.fixStatusBar(header);
    var pos = $api.offset(header);
    api.openFrame({
        name: 'checkin-con',
       url: 'http://mp.weixin.qq.com/s/yJ8MSPzBWcRoxw2JtZtcmQ',
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