<div class="col-12 large">
    <article class="post-main large-post large-post-b post type-post status-publish format-standard has-post-thumbnail">
        <header class="post-header cf">
            <div class="post-meta post-meta-c post-meta-left has-below">
                <div class="meta-above">
                    <span class="cat-labels">
                        <span class="category" rel="category">{{$obj['title']}}</span>
                    </span>
                </div>
                <h2 class="is-title post-title-alt">
                    <a href="@include('interface_layouts.href_news_view', ['href' => $items[0]->url])">{{\Illuminate\Support\Str::limit($items[0]->title, $limit = 90, $end = '...')}}</a>
                </h2>
                <div class="below meta-below">
                    <span class="meta-item post-author">
                        <span class="by">By</span>
                        <span title="Posts by Admin" rel="author" class="author">Admin</span>
                    </span>
                    <span class="meta-sep"></span>
                    <span class="meta-item date-link">
                        <time class="post-date">{{date('F d, Y', strtotime($items[0]->created_at))}}</time>
                    </span>
                </div>
            </div>
            <div class="featured">
                <a href="@include('interface_layouts.href_news_view', ['href' => $items[0]->url])" class="image-link media-ratio ratio-3-2">
                    <img src="" class="attachment-cheerup-768 size-cheerup-768 wp-post-image lazyload" alt="" sizes="(max-width: 768px) 100vw, 768px" title="{{$items[0]->title}}" data-src="{{str_replace('news_450x300', 'news', $items[0]->image)}}">
                </a>
            </div>
        </header>
        <div class="post-content description cf entry-content">
            <div>{{$items[0]->describe}}</div>
            <div class="read-more">
                <a href="@include('interface_layouts.href_news_view', ['href' => $items[0]->url])">
                    <span>Keep Reading</span>
                </a>
            </div>
        </div>
        <div class="post-footer large-post-footer">
            <div class="col col-6 author">
                <span>By</span>
                <span title="Posts by Admin" rel="author" class="author">Admin</span>
            </div>
        </div>
    </article>
</div>
<div class="posts-wrap">
    @foreach($items as $key => $value)
        @if($loop->index > 0)
            <div class="col-12">
                <article class="list-post list-post-a">
                    <div class="post-thumb">
                        <a href="@include('interface_layouts.href_news_view', ['href' => $value->url])" class="image-link media-ratio ratio-3-2">
                            <span data-bgsrc="{{$value->image}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-sizes="(max-width: 270px) 100vw, 270px" title="{{$value->title}}"></span>
                        </a>
                    </div>
                    <div class="content">
                        <div class="post-meta post-meta-c post-meta-left has-below">
                            <h2 class="is-title post-title">
                                <a href="@include('interface_layouts.href_news_view', ['href' => $value->url])">{{\Illuminate\Support\Str::limit($value->title, $limit = 50, $end = '...')}}</a>
                            </h2>
                            <div class="below meta-below">
                                <span class="meta-item post-author">
                                    <span class="by">By</span>
                                    <span title="Posts by Admin" rel="author" class="author">Admin</span>
                                </span>
                                <span class="meta-sep"></span>
                                <span class="meta-item date-link">
                                    <time class="post-date">{{date('F d, Y', strtotime($value->created_at))}}</time>
                                </span>
                            </div>
                        </div>
                        <div class="post-content post-excerpt cf">
                            <p>{{\Illuminate\Support\Str::limit($value->describe, $limit = 115, $end = '...')}}</p>
                        </div>
                    </div>
                </article>
            </div>
        @endif
    @endforeach
</div>
