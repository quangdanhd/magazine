@if($items)
    <div class="vc_column-inner">
        <div class="wpb_wrapper">
            <section class="cf block highlights-block">
                <div class="block-head block-head-b">
                    <h4 class="title">
                        <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])">{{$obj['category'][$items[0]['category_id']]['name']}}</a>
                    </h4>
                    <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])" class="view-all">View All</a>
                </div>
                <div class="block-content">
                    <div class="large cf">
                        @include('interface_front.grid_post', ['item' => $items[0]])
                    </div>
                    <div class="posts-list">
                        @foreach($items as $key => $value)
                            @if($loop->index > 0 && $loop->index < 3)
                                @include('interface_front.small_post', ['item' => $value])
                            @endif
                            @if ($loop->index >= 3)
                                @break
                            @endif
                        @endforeach
                    </div>
                </div>
            </section>
        </div>
    </div>
@endif
