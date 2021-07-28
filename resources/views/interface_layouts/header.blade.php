<div class="top-bar dark top-bar-b cf">
    <div class="top-bar-content ts-contain" data-sticky-bar="1">
        <div class="wrap cf">
            <span class="mobile-nav">
                <i class="tsi tsi-bars"></i>
            </span>
        </div>
    </div>
</div>
<div class="inner inner-head ts-contain" data-sticky-bar="1">
    <div class="wrap cf">
        <h1 class="title">
            <a href="/" title="Magazine" rel="home">
                <img class="mobile-logo" src="{{asset('/img/logo_m.png')}}" width="205" height="26" alt="Magazine">
                <img src="{{asset('/img/logo.png')}}" class="logo-image" alt="Magazine">
            </a>
        </h1>
        <div class="navigation-wrap inline">
            <nav class="navigation inline light" data-sticky-bar="1">
                <div class="menu-main-menu-container">
                    @include('interface_layouts.menu')
                </div>
            </nav>
        </div>
    </div>
</div>
