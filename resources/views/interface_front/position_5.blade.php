@if($items)
    <section class="cf block blog">
        <div class="block-head block-head-b">
            <h4 class="title">
                <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])">{{$obj['category'][$items[0]['category_id']]['name']}}</a>
            </h4>
            <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$items[0]['category_id']]['url']])" class="view-all">View All</a>
        </div>
        <div class="block-content">
            <div class="posts-dynamic posts-container ts-row list count-0">
                <div class="posts-wrap">
                    @foreach($items as $key => $value)
                        @if($loop->index < 6)
                            <div class="col-12">
                                @include('interface_front.list_post', ['item' => $value])
                            </div>
                        @endif
                        @if ($loop->index >= 6)
                            @break
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
