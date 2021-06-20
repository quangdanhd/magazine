<template>
    <div class="container-fluid pt-2 pb-2">
        <div v-if="formSubmit" class="report-loader">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <!--message & error-->
        <div v-if="message !== ''">
            <div class="mb-0 alert alert-success alert-dismissible">
                <span @click="closeMessage" class="close cursor-pointer" aria-label="close">&times;</span>
                <strong>Success!</strong>
                <span v-html="message"></span>
            </div>
        </div>
        <div v-if="error !== ''">
            <div class="mb-0 alert alert-danger alert-dismissible">
                <span @click="closeError" class="close cursor-pointer" aria-label="close">&times;</span>
                <strong>Warning!</strong>
                <span v-html="error"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-5">
                <form @submit="submitDataForm($event)" class="pt-2 mb-3 report-form needs-validation" novalidate :disabled="formSubmit">
                    <div v-for="(item, key) in positions" :key="key + '-row'" class="form-group row">
                        <label class="col-12 col-sm-4 col-form-label col-form-label-sm">
                            <span>{{item}}</span>
                            <span class="text-danger">*</span>
                        </label>
                        <div class="col-12 col-sm-8">
                            <label class="w-100 mb-0">
                                <select class="form-control form-control-sm" required>
                                    <option value>{{$t('button.option_none')}}</option>
                                    <option v-for="(option, op_key) in category" :key="op_key + '-option'" :value="op_key">
                                        {{option}}
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-primary w-50" type="submit" :disabled="formSubmit">
                            <span v-if="formSubmit" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span>Xác nhận</span>
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-12 col-md-7">
                <img :src="image" width="100%" alt="home layouts">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'obj'
        ],
        data() {
            return {
                message: '',
                error: '',
                positions: [],
                category: [],
                image: '',
                formSubmit: false,
            }
        },
        created() {
            this.positions = this.obj['positions'];
            this.category = this.obj['category'];
            this.image = this.obj['image'];
        },
        methods: {
            closeMessage() {
                this.message = '';
            },
            closeError() {
                this.error = '';
            },
            submitDataForm(e) {

            }
        }
    }
</script>
