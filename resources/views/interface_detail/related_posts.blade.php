@if($items)
    <section class="related-posts grid-3">
        <h4 class="section-head">
            <span class="title">Related Posts</span>
        </h4>
        <div class="ts-row posts cf">
            @foreach($items as $key => $value)
                <article class="post col-4">
                    <a href="@include('interface_layouts.href_news_view', ['href' => $value['url']])" class="image-link media-ratio ratio-3-2">
                        <span data-bgsrc="{{$value['image']}}" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-sizes="(max-width: 270px) 100vw, 270px" title="{{$value['title']}}"></span>
                    </a>
                    <div class="content">
                        <h3 class="post-title">
                            <a href="@include('interface_layouts.href_news_view', ['href' => $value['url']])" class="post-link">{{\Illuminate\Support\Str::limit($value['title'], $limit = 50, $end = '...')}}</a>
                        </h3>
                        <div class="post-meta post-meta-c has-below">
                            <div class="below meta-below">
                                <span class="meta-item date-link">
                                    <time class="post-date">{{date('F d, Y', strtotime($value['created_at']))}}</time>
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>
    </section>
@endif
