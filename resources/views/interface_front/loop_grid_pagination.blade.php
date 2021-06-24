@foreach($obj['items'] as $key => $value)
    <div class="column col-4 fade-in-up-lg">
        @include('interface_front.grid_post_latest', ['item' => $value])
    </div>
@endforeach
