<div class="grid-overlay grid-overlay-a hover-zoom">
    <div class="post-thumb">
        <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])" class="image-link">
            <span data-bgsrc="{{$item['image']}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyload" role="img" title="{{$item['title']}}"></span>
        </a>
    </div>
    <div class="content">
        <div class="post-meta post-meta-c meta-contrast has-below">
            <div class="meta-above">
                <span class="cat-labels">
                    @if(isset($obj['category']))
                        <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$item['category_id']]['url']])" class="category" rel="category">{{$obj['category'][$item['category_id']]['name']}}</a>
                    @endif
                </span>
            </div>
            <h3 class="is-title post-title">
                <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])">{{\Illuminate\Support\Str::limit($item['title'], $limit = 70, $end = '...')}}</a>
            </h3>
            <div class="below meta-below">
                <span class="meta-item post-author">
                    <span title="Posts by Admin">Admin</span>
                </span>
                <span class="meta-sep"></span>
                <span class="meta-item date-link">
                    <time class="post-date">{{date('F d, Y', strtotime($item['created_at']))}}</time>
                </span>
            </div>
        </div>
    </div>
</div>
