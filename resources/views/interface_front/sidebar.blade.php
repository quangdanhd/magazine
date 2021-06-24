<div class="wpb_column vc_column_container vc_col-sm-4 col-4 sidebar sticky-col" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="vc_column-inner">
        <div class="wpb_wrapper theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
            <div class="wpb_content_element">
                <div class="wpb_wrapper">
                    <ul>
                        <li class="widget widget-posts">
                            @if(isset($obj['popular']))
                                <h5 class="widget-title block-head-d has-style">
                                    <span class="title">Popular</span>
                                </h5>
                                @include('interface_front.sidebar_popular', ['items' => $obj['popular']])
                            @endif
                        </li>
                        <li class="widget widget-a-wrap">
                            <div class="the-wrap">
                                <img class="lazyload" src="" data-src="/img/ads_sidebar.jpg" alt="ads">
                            </div>
                        </li>
                        <li class="widget widget_categories">
                            @include('interface_front.sidebar_categories')
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
