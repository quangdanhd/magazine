<div class="main wrap" style="transform: none;">
    <div class="single-magazine post type-post status-publish format-standard has-post-thumbnail category-travel tag-fashion tag-photography tag-slider" style="transform: none;">
        <div class="post-top cf">
            @if($obj['detail']->category_id)
                <span class="cat-label cf color">
                <a href="@include('interface_layouts.href_category', ['href' => $obj['category'][$obj['detail']->category_id]['url']])" class="category" rel="category">{{$obj['category'][$obj['detail']->category_id]['name']}}</a>
            </span>
            @endif
            <h1 class="post-title">{{$obj['detail']->title}}</h1>
            <div class="sub-title">{{$obj['detail']->describe}}</div>
            <div class="post-meta post-meta-c post-meta-left the-post-meta has-below">
                <div class="below meta-below">
                    <span class="meta-item post-author">
                        <span class="by">By</span>
                        <span title="Posts by Admin" rel="author" class="author">Admin</span>
                    </span>
                    <span class="meta-sep"></span>
                    <span class="meta-item date-link">
                        <time class="post-date">{{date('F d, Y', strtotime($obj['detail']->created_at))}}</time>
                    </span>
                </div>
            </div>
        </div>
        <div class="ts-row cf" style="transform: none;">
            <div class="col-8 main-content cf" style="transform: none;">
                <article class="the-post" style="transform: none;">
                    <header class="post-header cf">
                        <div class="featured">
                            <img src="" class="attachment-cheerup-768 size-cheerup-768 wp-post-image lazyload" alt="" sizes="(max-width: 768px) 100vw, 768px" title="{{$obj['detail']->title}}" data-src="{{$obj['detail']->image}}">
                        </div>
                    </header>
                    <div class="post-content description cf entry-content has-share-float content-spacious">
                        <div>{!! $obj['detail']->content !!}</div>
                    </div>
                    @include('interface_detail.related_posts', ['items' => $obj['related']])
                </article>
            </div>
            @include('interface_detail.sidebar')
        </div>
    </div>
</div>
