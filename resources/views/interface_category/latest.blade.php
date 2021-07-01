<h5 class="widget-title block-head-d has-style">
    <span class="title">Latest</span>
</h5>
<ul class="posts cf large">
    @foreach($items as $key => $value)
        <li class="post cf">
            <div class="post-thumb">
                <a href="@include('interface_layouts.href_news_view', ['href' => $value['url']])" class="image-link media-ratio ratio-1-1">
                    <span data-bgsrc="{{$value['image']}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyload" role="img" data-sizes="(max-width: 150px) 100vw, 150px" title="{{$value['title']}}"></span>
                </a>
            </div>
            <div class="content">
                <div class="post-meta post-meta-c post-meta-left has-below">
                    <h4 class="is-title post-title">
                        <a href="@include('interface_layouts.href_news_view', ['href' => $value['url']])">{{\Illuminate\Support\Str::limit($value['title'], $limit = 50, $end = '...')}}</a>
                    </h4>
                    <div class="below meta-below">
                        <span class="meta-item date-link">
                            <time class="post-date">{{date('F d, Y', strtotime($value['created_at']))}}</time>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    @endforeach
</ul>
