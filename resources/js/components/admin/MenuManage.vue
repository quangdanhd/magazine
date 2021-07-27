<template>
    <div>
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
        <form @submit="submitData($event)" class="pt-2 mb-3 report-form needs-validation" novalidate :disabled="formSubmit">
            <div class="position-relative">
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <h4 class="mb-0 mr-3 float-left">{{obj['title']}}</h4>
                        <button @click="addMenu('')" type="button" class="btn btn-sm btn-outline-success">
                            <i class="fas fa-plus-circle"></i>
                            <span>Add new</span>
                        </button>
                        <button v-if="hasData()" type="submit" class="btn btn-sm btn-outline-primary">
                            <i class="fas fa-save"></i>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
            <!--message & error-->
            <div v-if="message !== ''">
                <div class="mt-1 mb-0 alert alert-success alert-dismissible">
                    <span @click="closeMessage" class="close cursor-pointer" aria-label="close">&times;</span>
                    <strong>Success!</strong>
                    <span v-html="message"></span>
                </div>
            </div>
            <div v-if="error !== ''">
                <div class="mt-1 mb-0 alert alert-danger alert-dismissible">
                    <span @click="closeError" class="close cursor-pointer" aria-label="close">&times;</span>
                    <strong>Warning!</strong>
                    <span v-html="error"></span>
                </div>
            </div>
            <div class="mt-2 table-responsive table-responsive-lg">
                <table class="table table-sm table-striped table-hover table-indent">
                    <thead class="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Parent</th>
                        <th>Link</th>
                        <th class="text-center">Active</th>
                        <th class="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!--Add new-->
                    <template v-for="(item, key) in newData">
                        <tr>
                            <td>
                                <label class="w-100 mb-0">
                                    <input v-model="item['title']" placeholder="Menu name" type="text" class="form-control form-control-sm" required>
                                </label>
                            </td>
                            <td>
                                <label class="w-100 mb-0">
                                    <select v-model="item['parent_id']" class="form-control form-control-sm" disabled>
                                        <option value>- Root -</option>
                                        <option v-for="(option, key_op) in parentSelect" :value="key_op">{{option}}</option>
                                    </select>
                                </label>
                            </td>
                            <td>
                                <label class="w-50 mb-0 float-left pr-2">
                                    <select @change="changeLinkType($event, key)" v-model="item['link_type']" class="form-control form-control-sm" required>
                                        <option value="1">Category</option>
                                        <option value="2">Url link</option>
                                    </select>
                                </label>
                                <label v-if="item['link_type'].toString() === '1'" class="w-50 mb-0 float-left">
                                    <select v-model="item['category_id']" class="form-control form-control-sm" required>
                                        <option value>- Choose category -</option>
                                        <option v-for="(option, key_op) in categorySelect" :value="key_op">{{option}}</option>
                                    </select>
                                </label>
                                <label v-if="item['link_type'].toString() === '2'" class="w-50 mb-0 float-left">
                                    <input v-model="item['link']" placeholder="link-item" type="text" class="form-control form-control-sm" required>
                                </label>
                            </td>
                            <td class="text-center">
                                <label class="mb-0 label-checkbox">
                                    <input v-model="item['active']" type="checkbox">
                                </label>
                            </td>
                            <td></td>
                        </tr>
                    </template>
                    <!--View & Edit-->
                    <template v-for="(item, key) in viewData">
                        <tr v-if="!(key in updateData)">
                            <td :class="'indent-' + item['indent']">
                                <span>{{item['title']}}</span>
                            </td>
                            <td></td>
                            <td>
                                <span>{{item['link']}}</span>
                            </td>
                            <td class="text-success text-center">
                                <span v-if="!!item['active']"><i class="far fa-check-circle"></i></span>
                            </td>
                            <td class="text-center menu-action">
                                <button v-if="!hasData()" @click="orderMenu(item['id'], 'up')" type="button" class="btn btn-sm btn-secondary">
                                    <i class="fas fa-arrow-circle-up"></i>
                                </button>
                                <button v-if="!hasData()" @click="orderMenu(item['id'], 'down')" type="button" class="btn btn-sm btn-secondary">
                                    <i class="fas fa-arrow-circle-down"></i>
                                </button>
                                <button @click="addMenu(item['id'])" type="button" class="btn btn-sm btn-secondary" :disabled="item['indent'] >= parentDeep">
                                    <i class="fas fa-plus-circle"></i>
                                    <span>child</span>
                                </button>
                                <button @click="editMenu(key)" type="button" class="btn btn-sm btn-secondary">
                                    <i class="far fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>
                                <label class="w-100 mb-0">
                                    <input v-model="updateData[key]['title']" placeholder="Menu name" type="text" class="form-control form-control-sm" required>
                                </label>
                            </td>
                            <td>
                                <label class="w-100 mb-0">
                                    <select v-model="updateData[key]['parent_id']" class="form-control form-control-sm" disabled>
                                        <option v-if="updateData[key]['parent_id'] === null" value="null">- Root -</option>
                                        <option v-else value>- Root -</option>
                                        <option v-if="key_op !== updateData[key]['id'].toString()" v-for="(option, key_op) in parentSelect" :value="key_op">{{option}}</option>
                                    </select>
                                </label>
                            </td>
                            <td>
                                <label class="w-50 mb-0 float-left pr-2">
                                    <select @change="changeLinkType($event, key)" v-model="updateData[key]['link_type']" class="form-control form-control-sm" required>
                                        <option value="1">Category</option>
                                        <option value="2">Url link</option>
                                    </select>
                                </label>
                                <label v-if="updateData[key]['link_type'].toString() === '1'" class="w-50 mb-0 float-left">
                                    <select v-model="updateData[key]['category_id']" class="form-control form-control-sm" required>
                                        <option v-if="updateData[key]['category_id'] === null" value="null">- Choose category -</option>
                                        <option v-else value>- Choose category -</option>
                                        <option v-for="(option, key_op) in categorySelect" :value="key_op">{{option}}</option>
                                    </select>
                                </label>
                                <label v-if="updateData[key]['link_type'].toString() === '2'" class="w-50 mb-0 float-left">
                                    <input v-model="updateData[key]['link']" placeholder="link-item" type="text" class="form-control form-control-sm" required>
                                </label>
                            </td>
                            <td class="text-center">
                                <label class="mb-0 label-checkbox">
                                    <input v-model="updateData[key]['active']" type="checkbox">
                                </label>
                            </td>
                            <td class="text-center menu-action">
                                <button @click="cancelEdit(key)" type="button" class="btn btn-sm btn-secondary">
                                    <i class="far fa-times-circle"></i>
                                </button>
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </form>
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
                formSubmit: false,
                parentDeep: 0,
                parentSelect: [],
                categorySelect: [],
                categoryLink: [],
                viewData: {},
                newData: [],
                updateData: {},
            }
        },
        created() {
            this.initData(this.obj);
        },
        methods: {
            initData(obj) {
                this.parentDeep = obj['parent_deep'];
                this.parentSelect = obj['parent_select'];
                this.categorySelect = obj['category'];
                this.categoryLink = obj['category_link'];
                this.viewData = obj['menu'];
            },
            closeMessage() {
                this.message = '';
            },
            closeError() {
                this.error = '';
            },
            hasData() {
                return this.newData.length > 0 || Object.keys(this.updateData).length > 0;
            },
            changeLinkType(event, key) {
                let type = event.target.value;
                if (type.toString() === '2') {
                    this.newData[key]['category_id'] = '';
                }
            },
            addMenu(parent_id) {
                let menu = {
                    'title': '',
                    'parent_id': parent_id,
                    'category_id': '',
                    'link_type': '1',
                    'link': '',
                    'active': 0,
                };
                this.newData.push(menu);
            },
            editMenu(key) {
                this.updateData[key] = this.viewData[key];
                this.$forceUpdate();
            },
            cancelEdit(key) {
                delete this.updateData[key];
                this.$forceUpdate();
            },
            submitData(e) {
                e.preventDefault();
                let form = $('form.needs-validation');
                if (form[0].checkValidity() === true) {
                    this.formSubmit = true;
                    this.message = '';
                    this.error = '';
                    axios.post('menu-save', {
                        newData: this.newData,
                        updateData: this.updateData,
                    }).then(response => {
                        if (response.data['status'] === 'success') {
                            this.newData = [];
                            this.updateData = {};
                            let message = response.data['message'];
                            axios.get('menu-manage').then(response => {
                                this.initData(response.data);
                                this.message = message;
                                this.formSubmit = false;
                            }).catch(error => {
                                this.error = error.response.data.message;
                                this.formSubmit = false;
                            });
                        } else {
                            this.error = response.data['message'];
                            this.formSubmit = false;
                        }
                    }).catch(error => {
                        this.error = error.response.data.message;
                        this.formSubmit = false;
                    })
                } else {
                    form.addClass('was-validated');
                    this.error = 'Thông tin dữ liệu nhập chưa chính xác hoặc không được phép để trống. Vui lòng kiểm tra lại!';
                }
            },
            orderMenu(id, key) {
                this.formSubmit = true;
                this.message = '';
                this.error = '';
                axios.post('menu-order', {
                    id: id,
                    order: key,
                }).then(response => {
                    if (response.data['status'] === 'success') {
                        let message = response.data['message'];
                        axios.get('menu-manage').then(response => {
                            this.initData(response.data);
                            this.message = message;
                            this.formSubmit = false;
                        }).catch(error => {
                            this.error = error.response.data.message;
                            this.formSubmit = false;
                        });
                    } else {
                        this.error = response.data['message'];
                        this.formSubmit = false;
                    }
                }).catch(error => {
                    this.error = error.response.data.message;
                    this.formSubmit = false;
                })
            },
        }
    }
</script>
