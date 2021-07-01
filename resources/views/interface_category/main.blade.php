<div class="archive-head ts-contain">
    <span class="sub-title">Category</span>
    <h2 class="title">{{$obj['title']}}</h2>
    <i class="background">Category</i>
</div>
<div class="main wrap" style="transform: none;">
    <div class="ts-row cf" style="transform: none;">
        <div class="col-8 main-content cf">
            <div class="posts-dynamic posts-container ts-row list count-100 mixed">
                @if ($obj['list'])
                    @include('interface_category.list', ['items' => $obj['list']])
                @endif
            </div>
            @include('interface_category.pagination', ['paginator' => $obj['list']])
        </div>
        @include('interface_category.sidebar')
    </div>
</div>
