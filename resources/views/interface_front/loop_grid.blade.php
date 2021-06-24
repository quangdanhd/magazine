@if($items)
    <section class="cf block loop-grid-3">
        <div class="block-head block-head-b">
            <h4 class="title">Latest</h4>
        </div>
        <div class="block-content">
            <div class="posts-dynamic posts-container ts-row grid count-0 has-grid-3">
                <div class="posts-wrap">
                    @foreach($items as $key => $value)
                        @if($loop->index < 6)
                            <div class="column col-4">
                                @include('interface_front.grid_post_latest', ['item' => $value])
                            </div>
                        @endif
                        @if ($loop->index >= 6)
                            @break
                        @endif
                    @endforeach
                </div>
            </div>
            <div class="main-pagination load-more">
                <span class="load-button" data-page="1"> Load More <i class="tsi tsi-repeat"></i></span>
            </div>
        </div>
    </section>
@endif
