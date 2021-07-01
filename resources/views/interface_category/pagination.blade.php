@if ($paginator->lastPage() > 1)
    <nav class="main-pagination number">
        <div class="inner">
            <span class="page-numbers label-prev">
                @if ($paginator->currentPage() == 1)
                    <span class="disabled"><i class="tsi tsi-long-arrow-left"></i>Previous</span>
                @else
                    <a href="{{$paginator->url(1)}}"><i class="tsi tsi-long-arrow-left"></i>Previous</a>
                @endif
            </span>
            @for ($i = 1; $i <= $paginator->lastPage(); $i++)
                @if ($paginator->currentPage() >= ($i - 5) && $paginator->currentPage() <= ($i + 5))
                    @if ($paginator->currentPage() == $i)
                        <span aria-current="page" class="page-numbers current">{{$i}}</span>
                    @else
                        <a class="page-numbers" href="{{$paginator->url($i)}}">{{$i}}</a>
                    @endif
                @endif
            @endfor
            <span class="page-numbers label-next">
                @if ($paginator->currentPage() == $paginator->lastPage())
                    <span class="disabled">Next<i class="tsi tsi-long-arrow-right"></i></span>
                @else
                    <a href="{{$paginator->url($paginator->currentPage() + 1)}}">Next<i class="tsi tsi-long-arrow-right"></i></a>
                @endif
            </span>
        </div>
    </nav>
@endif
