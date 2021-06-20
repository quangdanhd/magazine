@if($items)
    <div class="wpb_column vc_column_container vc_col-sm-12 col-12">
        <div class="vc_column-inner">
            <div class="wpb_wrapper">
                <section class="cf block blog" data-id="p-1">
                    <div class="block-head block-head-b">
                        <h4 class="title">
                            <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])">{{$obj['category'][$items[0]['category_id']]['name']}}</a>
                        </h4>
                        <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])" class="view-all">View All</a>
                    </div>
                    <div class="block-content">
                        <div class="posts-dynamic posts-container ts-row grid count-0 has-grid-3">
                            <div class="posts-wrap">
                                @foreach($items as $key => $value)
                                    @if($loop->index < 3)
                                        <div class="column col-4">
                                            @include('interface_front.grid_post', ['item' => $value])
                                        </div>
                                    @endif
                                    @if ($loop->index >= 3)
                                        @break
                                    @endif
                                @endforeach
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
@endif
