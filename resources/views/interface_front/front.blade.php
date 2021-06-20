@include('interface_front.feat_grid', ['feat' => isset($obj['feat']) ? $obj['feat'] : []])
<div class="main wrap" style="transform: none;">
    <div class="ts-row cf" style="transform: none;">
        <div class="col-8 main-content cf" style="transform: none;">
            <div class="the-post the-page page-content" style="transform: none;">
                <div class="ts-row blocks cf wpb_row">
                    @include('interface_front.position_1', ['items' => isset($obj['position_1']) ? $obj['position_1'] : []])
                </div>
                <div class="ts-row blocks cf wpb_row">
                    <div class="wpb_column vc_column_container vc_col-sm-12 col-12">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="block">
                                    @include('interface_layouts.ads_wrap', ['class' => ''])
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ts-row blocks cf wpb_row" style="transform: none;">
                    <div class="wpb_column vc_column_container vc_col-sm-8 col-8">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="ts-row blocks cf wpb_row vc_inner">
                                    <div class="wpb_column vc_column_container vc_col-sm-6 col-6">
                                        @include('interface_front.position_2', ['items' => isset($obj['position_2']) ? $obj['position_2'] : []])
                                    </div>
                                    <div class="wpb_column vc_column_container vc_col-sm-6 col-6">
                                        @include('interface_front.position_2', ['items' => isset($obj['position_3']) ? $obj['position_3'] : []])
                                    </div>
                                </div>
                                @include('interface_front.position_4', ['items' => isset($obj['position_4']) ? $obj['position_4'] : []])
                                @include('interface_front.position_5', ['items' => isset($obj['position_5']) ? $obj['position_5'] : []])
                            </div>
                        </div>
                    </div>
                    @include('interface_front.sidebar')
                </div>
                <div class="ts-row blocks cf wpb_row">
                    <div class="wpb_column vc_column_container vc_col-sm-12 col-12">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="block">
                                    @include('interface_layouts.ads_wrap', ['class' => ''])
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ts-row blocks cf wpb_row">
                    <div class="wpb_column vc_column_container vc_col-sm-12 col-12">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                @include('interface_front.loop_grid', ['items' => isset($obj['feat']) ? $obj['feat'] : []])
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
