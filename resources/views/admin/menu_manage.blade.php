@extends('layouts.master', ['title' => $obj['title']])

@section('content')
    <menu-manage :obj='@json($obj)'></menu-manage>
@stop

@section('scripts')
    <script>
        (function () {
            'use strict';
            $(document).on('submit', 'form.needs-validation', function (e) {
                if (this.checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                this.classList.add('was-validated');
            });
        })();
    </script>
@endsection
