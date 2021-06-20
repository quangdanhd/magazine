<article class="small-post cf">
    <div class="post-thumb">
        <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])" class="image-link media-ratio ar-cheerup-small-post">
            <span data-bgsrc="{{$item['image']}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyload" role="img" data-sizes="(max-width: 110px) 100vw, 110px" title="{{$item['title']}}"></span>
        </a>
    </div>
    <div class="content">
        <a href="@include('interface_layouts.href_news_view', ['href' => $item['url']])" class="post-title">{{\Illuminate\Support\Str::limit($item['title'], $limit = 50, $end = '...')}}</a>
        <div class="post-meta post-meta-c post-meta-left has-below">
            <div class="below meta-below">
                <span class="meta-item date-link">
                    <time class="post-date">{{date('F d, Y', strtotime($item['created_at']))}}</time>
                </span>
            </div>
        </div>
    </div>
</article>
