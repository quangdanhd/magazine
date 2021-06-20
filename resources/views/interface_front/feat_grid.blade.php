<section class="feat-grid feat-grid-c static feat-grid-ratio">
    <div class="slides wrap" data-parallax>
        <div class="items-wrap slide-wrap">
            @foreach($feat as $key => $value)
                @if($loop->index < 3)
                    @if($loop->index == 0)
                        <div class="item item-large item-main item-{{($loop->index + 1)}} pos-bot">
                            @include('interface_front.feat_item', ['item' => $value])
                        </div>
                    @else
                        <div class="item item-medium item-main item-{{($loop->index + 1)}} pos-bot">
                            @include('interface_front.feat_item', ['item' => $value])
                        </div>
                    @endif
                @endif
                @if ($loop->index >= 3)
                    @break
                @endif
            @endforeach
        </div>
    </div>
</section>
