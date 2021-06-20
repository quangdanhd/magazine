<article class="list-post list-post-a">
    <div class="post-thumb">
        <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])" class="image-link media-ratio ratio-3-2">
            <span data-bgsrc="{{$item['image']}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyload" role="img" data-sizes="(max-width: 270px) 100vw, 270px" title="{{$item['title']}}"></span>
        </a>
    </div>
    <div class="content">
        <div class="post-meta post-meta-c post-meta-left has-below">
            <h2 class="is-title post-title">
                <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])">{{\Illuminate\Support\Str::limit($item['title'], $limit = 70, $end = '...')}}</a>
            </h2>
            <div class="below meta-below">
                <span class="meta-item post-author"><span class="by">By</span>
                    <span title="Posts by Shane Doe" rel="author" class="author">Admin</span>
                </span>
                <span class="meta-sep"></span>
                <span class="meta-item date-link">
                    <time class="post-date">{{date('F d, Y', strtotime($item['created_at']))}}</time>
                </span>
            </div>
        </div>
        <div class="post-content post-excerpt cf">
            <p>{{\Illuminate\Support\Str::limit($item['describe'], $limit = 110, $end = '...')}}</p>
        </div>
    </div>
</article>
