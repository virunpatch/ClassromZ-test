<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">แก้ไขงาน</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>ชื่อ</label>
                    <input type="text" class="form-control" v-model="assign.name" required>
                </div>

                <div class="form-group">
                    <label>คำอธิบาย</label>
                    <textarea type="text" class="form-control" v-model="assign.des" />
                </div>
                <div class="form-group">
                    <label>คะแนนเต็ม</label>
                    <input type="text" class="form-control" v-model="assign.full" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block"> บันทึก </button>
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
                }
            }
        },
        created() {
            let dbRef = db.collection('assign').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.assign = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('assign').doc(this.$route.params.id)
                .update(this.assign).then(() => {
                    console.log("บันทึกสำเร็จ!");
                    this.$router.push('/page3')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>