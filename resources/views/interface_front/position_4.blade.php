@if($items)
    <section class="cf block news-block">
        <div class="block-head block-head-b">
            <h4 class="title">
                <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])">{{$obj['category'][$items[0]['category_id']]['name']}}</a>
            </h4>
            <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])" class="view-all">View All</a>
        </div>
        <div class="block-content ts-row">
            <div class="col-6 large cf">
                @include('interface_front.grid_post', ['item' => $items[0]])
            </div>
            <div class="col-6 posts-list">
                <div class="ts-row">
                    @foreach($items as $key => $value)
                        @if($loop->index > 0 && $loop->index < 5)
                            @include('interface_front.small_post_4', ['item' => $value])
                        @endif
                        @if ($loop->index >= 5)
                            @break
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
