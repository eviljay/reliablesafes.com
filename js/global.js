var gl = new function(){
    this.domain;
    this.currency;
    this.lang;
}
gl.redirectByParam = function(param, value)
{
    this[param] = value;
    location.href = window.location.origin + '/' + (this.lang?this.lang:'') + (this.currency?('?currency='+this.currency):'');
}
gl.renderCurrenies = function(currencies)
{
    var options = '';
    var len = currencies.length;
    for (var i = 0; i < len; i++) {
        var cur = currencies[i];
        options += '<option value="' + cur +'" '+ ((cur==gl.currency)?'selected':'') +' >' + cur + '</option>';
    }
    document.getElementById('currencies').innerHTML = options;
}

gl.pbar = {};
gl.pbar.show = function()
{
    $.LoadingOverlay("show", {
        background  : "rgba(0, 0, 0, 0.7)",
        size : 4,
        imageColor : '#fff',
        fade : [300,0]
    });
}
gl.pbar.hide = function() {
    $.LoadingOverlay("hide");
}

gl.loadScripts = function()
{
    return $LAB
        .script('https://code.jquery.com/jquery-3.6.0.min.js')
        .script('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js')
        .script('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js')
        .script('https://unpkg.com/vue@2.6.10/dist/vue.min.js')
        .script('https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.6/dist/loadingoverlay.min.js')
        .script('/js/app.min.js?=8')
        ;
}

gl.showOffer = function()
{
    gl.loadScripts()
        .wait(function(){
            offer.show();
        })
}

gl.showContact = function()
{
    gl.loadScripts()
        .script('https://unpkg.com/vue-recaptcha@1.3.0/dist/vue-recaptcha.min.js')
        .script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit' + (gl.lang?('&hl='+gl.lang):''))
        .wait(function(){
            contactShow();
        });
}
gl.showPPlan = function()
{
    gl.loadScripts()
        .wait(function(){
            PPlan.show();
        });
}
