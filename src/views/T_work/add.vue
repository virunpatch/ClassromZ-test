<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">เพิ่มงานใหม่</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>หัวข้อ</label>
                    <input type="text" class="form-control" v-model="assign.name" required>
                </div>

                <div class="form-group">
                    <label>คำอธิบาย</label>
                    <v-textarea type="text" class="form-control" v-model="assign.des" required/>
                </div>

                <div class="form-group">
                    <label>คะแนน</label>
                    <input type="text" class="form-control" v-model="assign.full" required>
                </div>


                <div class="form-group">
                    <button class="btn btn-primary btn-block ma-5" >เพิ่มงาน</button>
                    <v-btn class="ma-5" to="/Page3">กลับ</v-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../../firebaseDb';

    export default {
        data() {
            return {
                assign: {
                    name:"",
                    des:"",
                    full:0 ,
                    //student:docs.student
                },
                docs:[],
            }
        },
        created() {
                db.collection('subject').onSnapshot((snapshotChange) => {
                this.docs = [];
                snapshotChange.forEach((doc) => {
                    this.docs.push({
                        key: doc.id,
                        student: doc.data().student,
                        /*key: doc.id,
                        name: doc.data().name,*/
                    })
                });
            })
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('assign').add(this.assign).then(() => {
                    alert("successfully created!");
                    this.assign.name = ''
                    this.assign.des = ''
                    this.assign.full = ''
                    this.assign.students = this.docs.student
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>