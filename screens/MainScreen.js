import React from 'react';
import {View,Text,TextInput,StyleSheet,Modal,ScrollView,KeyboardAvoidingView,Alert,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class MainScreen extends React.Component{
    constructor(){
      super()
      this.state={
        firstName: ''  ,
        lastName: '',
        Contact: '',
        Address : '',
        class: '',
        classTeacherOf : '',
        division: '',
        rollNo: '',
        isStudentModalVisible:'false',
        isTeacherModalVisible:'false',
 
        studentEmailId: '',
        studentPassword: '',
        studentConfirmPassword: '',
       
        teacherEmailId: '',
        teacherPassword: '',
        teacherConfirmPassword: ''
      }
    }
    

    teacherLogin=(teacherEmailId,teacherPassword)=>{
        firebase.auth().signInWithEmailAndPassword(teacherEmailId,teacherPassword)
        .then(()=>{
          this.props.navigation.navigate('HomeScreen')  
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
      studentLogin=(studentEmailId,studentPassword)=>{
        firebase.auth().signInWithEmailAndPassword(studentEmailId,studentPassword)
        .then(()=>{
          this.props.navigation.navigate('HomeScreen')  
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
           


      showModalForStudents=()=>{
        return(
         <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isStudentModalVisible}
              >
             <View style={styles.modalContainer}>
               <ScrollView>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                 <Text style={styles.modalTitle}>Registration for Students</Text>
 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"First Name"}
                   maxLength={8}
                   onChangeText={(text)=>{
                     this.setState({
                         firstName: text
                     })  
                   }}
                   value={this.state.firstName}
                 />
                 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Last Name"}
                   maxLength={10}
                   onChangeText={(text)=>{
                     this.setState({
                        lastName: text 
                     })  
                   }}                
                   value={this.state.lastName}
                 />
 
                 <TextInput
                 style={styles.formTextInput}
                   placeholder={"Roll no"}
                   maxLength={3}
                   onChangeText={(text)=>{
                     this.setState({
                       rollNo: text  
                     })  
                   }}
                   value={this.state.rollNo}
                 />
                 <TextInput
                 style={styles.formTextInput} 
                 placeholder={"Class"}
                   maxLength={1}
                   onChangeText={(text)=>{
                       this.setState({
                         class: text  
                       })
                   }}
                   value={this.state.class}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"Contact"}
                   maxLength={10}
                   keyboardType="numeric"
                   onChangeText={(text)=>{
                    this.setState({
                       Contact: text
                     })
                   }}
                   value={this.state.Contact}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"Address"}
                   multiline={true}
                   onChangeText={(text)=>{
                    this.setState({
                      Address: text  
                    })   
                   }}
                   value={this.state.Address}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"email-address"}
                   keyboardType="email-address"
                   onChangeText={(text)=>{
                     this.setState({
                       studentEmailId: text  
                     })  
                   }}
                   value={this.state.studentEmailId}
                 />
                 <TextInput
                  style={styles.formTextInput}
                   placeholder={"password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      studentPassword: text  
                    })
                   }}
                   value={this.state.studentPassword}
                   />
                   <TextInput
                    style={styles.formTextInput}
                   placeholder={"confirm password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      studentConfirmPassword: text  
                    })
                   }}
                   value={this.state.studentConfirmPassword}
                    />

                    
                    <View style={styles.modalContainer}>
                      <TouchableOpacity 
                        onPress={()=>{this.studentSignUp(this.state.studentEmailId,this.state.studentPassword,this.state.studentConfirmPassword)}}
                        style={styles.registerButton}
                        >
                        <Text style={styles.registerButtonText}>Register Student</Text>  
                      </TouchableOpacity>
                      </View>
                      <View style={styles.modalContainer}>
                      <TouchableOpacity  style={styles.cancelButton} onPress={()=>{this.setState({"isStudentModalVisible": false})}}>
                         <Text>Cancel</Text> 
                      </TouchableOpacity>
                    </View>
                 </KeyboardAvoidingView>    
               </ScrollView>  
             </View>
 
          </Modal>
         </View>   
        )
       }
       showModalForTeachers=()=>{
         return(
          <View>
           <Modal
             animationType="fade"
             transparent={true}
             visible={this.state.isTeacherModalVisible}
           >
                <View style={styles.modalContainer}>
               <ScrollView>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                 <Text style={styles.modalTitle}>Registration for Teachers</Text>
  
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"First Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                      this.setState({
                          firstName: text
                      })  
                    }}
                  value={this.state.firstName}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Last Name"}
                    maxLength={10}
                    onChangeText={(text)=>{
                      this.setState({
                         lastName: text 
                      })  
                    }}
                   value={this.state.lastName}
                  />
                  
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Class teacher of"}
                    maxLength={2}
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                        this.setState({
                          classTeacherOf : text 
                        })
                    }}
                    value={this.state.classTeacherOf}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Contact"}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                     this.setState({
                        Contact: text
                      })
                    }}
                    value={this.state.Contact}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text)=>{
                     this.setState({
                       Address: text  
                     })   
                    }}
                    value={this.state.Address}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"email-address"}
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                      this.setState({
                      teacherEmailId: text  
                      })  
                    }}
                    value={this.state.teacherEmailId}
                  />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"password"}
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                     this.setState({
                       teacherPassword: text  
                     })
                    }}
                    value={this.state.teacherPassword}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder={"confirm password"}
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                     this.setState({
                      teacherConfirmPassword: text  
                     })
                    }}
                    value={this.state.teacherConfirmPassword}
                     />
                     
                     <View style={styles.modalContainer}>
                       <TouchableOpacity style={styles.registerButton} onPress={()=>{this.teacherSignUp(this.state.studentEmailId,this.state.studentPassword,this.state.studentConfirmPassword)}}>
                         <Text style={styles.registerButtonText}>Register Teacher</Text>  
                       </TouchableOpacity>
                       </View>
                       <View style={styles.modalContainer}>
                       <TouchableOpacity style={styles.cancelButton} onPress={()=>{this.setState({"isTeacherModalVisible": false})}}>
                          <Text>Cancel</Text> 
                       </TouchableOpacity>
                     </View>
                  </KeyboardAvoidingView>    
                </ScrollView>  
              </View>
  
           </Modal>
          </View>   
         )
        }
        studentSignUp=(emailId,password,confirmPassword)=>{
          if(password !== confirmPassword)
          {
            Alert.alert("Password does'nt match \n Check Your Password")
          }
          else{
            firebase.auth().createUserWithEmailAndPassword(emailId,password)
            .then(()=>{
             db.collection('students').add({
                first_name: this.state.firstName,
                last_name: this.state.firstName,
                contact: this.state.Contact,
                email_id : this.state.emailId,
                address: this.state.Address,
                roll_no: this.state.rollNo,
                class: this.state.class,
                password: this.state.password
              })
              return Alert.alert( 'User Added Successfully', '', [
                {text: 'OK', onPress: () => this.setState({"isStudentModalVisible" : false})}, ] );   
            })
            .catch((error)=> { // Handle Errors here.
                var errorCode = error.code; 
                var errorMessage = error.message; 
                return Alert.alert(errorMessage) });
          }
        }
     teacherSignUp=(teacherEmailId,teacherPassword,teacherConfirmPassword)=>{
         if(teacherPassword !== teacherConfirmPassword)
         {
           Alert.alert("Password does'nt match \n Check Your Password")
         }
         else{
           firebase.auth().createUserWithEmailAndPassword(teacherEmailId,teacherPassword )
           .then(()=>{
             db.collection('teachers').add({
               first_name: this.state.firstName,
               last_name: this.state.firstName,
               contact: this.state.Contact,
               teacher_id : this.state.teacherEmailId,
               teacher_password: this.state.teacherPassword,
               address: this.state.Address,
               classTeacher_of: this.state.classTeacherOf  
             })
             return Alert.alert( 'User Added Successfully', '', [
               {text: 'OK', onPress: () => this.setState({"isTeacherModalVisible" : false})}, ] );   
           })
           .catch((error)=> { // Handle Errors here.
               var errorCode = error.code; 
               var errorMessage = error.message; 
               return Alert.alert(errorMessage) });
         }
       }
 
    render(){
      return(
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Report-Card App</Text>
           <View style={styles.profileContainer}>
             <View>
             <TextInput
          style={styles.formTextInput}
          placeholder={"example@studentGmail.com"}
          placeholderTextColor="#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              studentEmailId: text
            })
          }}
          value={this.state.studentEmailId}
        />

        <TextInput
          style={styles.formTextInput}
          secureTextEntry = {true}
          placeholder={"Enter Your Password Here!"}
          placeholderTextColor="#ffff"
          onChangeText={(text)=>{
            this.setState({
              studentPassword: text
            })
          }}
          value={this.state.studentPassword}
        />
        <TouchableOpacity  
         style={[styles.button,{marginTop: 20}]} 
         onPress={()=>{this.studentLogin(this.state.studentEmailId,this.state.studentPassword)}}
         >
          <Text style={styles.buttonText}>Login As A Student</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.profileContainer}>
        <TextInput
          style={styles.formTextInput}
          placeholder={"example@teacherGmail.com"}
          placeholderTextColor="#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              teacherEmailId: text
            })
          }}
          value={this.state.teacherEmailId}
        />

        <TextInput
          style={styles.formTextInput}
          secureTextEntry = {true}
          placeholder={"Enter Your Password Here!"}
          placeholderTextColor="#ffff"
          onChangeText={(text)=>{
            this.setState({
              teacherPassword: text
            })
          }}
          value={this.state.teacherPassword}
        />
        <TouchableOpacity 
          style={[styles.button,{marginTop: 20}]}
          onPress={()=>{this.teacherLogin(this.state.teacherEmailId,this.state.teacherPassword)}}
          >
          <Text style={styles.buttonText}>Login As A Teacher</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={()=>this.setState({"isTeacherModalVisible": true})}
          style={[styles.signButton,{marginTop: 20}]}
          >
          <Text style={styles.buttonText}>Sign Up As A Teacher</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.setState({"isStudentModalVisible": true})}
          style={[styles.signButton,{marginTop: 20}]}
        >
          <Text style={styles.buttonText}>Sign Up As A Student</Text>
        </TouchableOpacity>
        </View>
        </View>  
      )  
    }
}

const styles = StyleSheet.create({
  loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  }, 
  button:{ 
    width:300, 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"#ff9800", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16, 
    padding: 10
   }, 
   signButton:{ 
    width:300, 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:15, 
    backgroundColor:"#00FF00", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16, 
    padding: 10
   }, 
   buttonText:{
     color:'#ffff', 
     fontWeight:'200', 
     fontSize:15
  },
  profileContainer:{  justifyContent:'center', alignItems:'center',backgroundColor: '#ff8a65' }, 
  registerButton:{ 
    width:200, 
    height:40, 
    alignItems:'center', 
    justifyContent:'center', 
    borderWidth:1, 
    borderRadius:10, 
    marginTop:30
   }, 
  registerButtonText:{ 
    color:'#ff5722', 
    fontSize:15, 
    fontWeight:'bold'
   }, 
  cancelButton:{ 
   width:200, 
   height:30, 
   justifyContent:'center', 
   alignItems:'center', 
   marginTop:5
   },
   KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' }, 
   modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 }
  ,
  modalContainer:{ 
   flex:1,
   borderRadius:20, 
   justifyContent:'center', 
   alignItems:'center', 
   backgroundColor:"#ff8a65", 
   marginRight:30, 
   marginLeft : 30, 
   marginTop:80, 
   marginBottom:80
   }, 
   title :{ fontSize:41., fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, 

})