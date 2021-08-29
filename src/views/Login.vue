<template>
  <v-row align="center" justify="center" style="height: calc(100vh - 100px);">
    <v-stepper v-model="e1" dark min-width="650" max-width="800">
        <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
            Login Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
            Contact Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
            Personal Information
        </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
        <v-stepper-content step="1">
           <v-text-field
                autofocus
                filled
                v-model="username"
                name="username"
                label="Username"
                :rules="[rules.required]"
                ref="username"
                :error-messages="errorMessages"
                required
           >

           </v-text-field>

            <v-text-field
                filled
                ref="password"
                v-model="password" 
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.requred, rules.min]"
                :type="show ? 'text' : 'password'"
                name="password"
                label="Password"
                hint="At least 8 characters"
                counter
                :error-messages="errorMessages"
                required
                @click:append="show = !show"></v-text-field>

            <v-btn
            color="primary"
            @click="e1 = 2"
            >
            Continue
            </v-btn>

            <v-btn text disabled>
            Back
            </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
            
            <v-text-field
                filled
                required
                ref="email"
                v-model="email"
                name="email"
                label="E-Mail"
                placeholder="example@mail.com"
                :rules="[rules.required]"                
            ></v-text-field>

            <v-text-field
                filled
                ref="address"
                v-model="address"
                :rules="[ rules.required, () => address && address.length <= 30 || 'Address must be less than 30 characters']"
                label="Address Line"
                placeholder="Beogradska 1"
                counter="30"
                required
          ></v-text-field>
          <v-text-field
                ref="city"
                v-model="city"
                :rules="[rules.required]"
                label="City"
                placeholder="Tirana"
                required
                filled
          ></v-text-field>
          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[rules.required]"
            label="ZIP / Postal Code"
            required
            filled
            placeholder="11030"
          ></v-text-field>
          <v-autocomplete
            filled
            ref="country"
            v-model="country"
            :rules="[rules.required]"
            :items="countries"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>

            <v-btn
            color="primary"
            @click="e1 = 3"
            >
            Continue
            </v-btn>

            <v-btn text @click="e1 = 1">
            Back
            </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
            
            <v-text-field
                ref="name"
                v-model="name"
                :rules="[rules.required]"
                label="Name"
                placeholder="John"
                required
                filled
            ></v-text-field>

            <v-text-field
                ref="surname"
                v-model="surname"
                :rules="[rules.required]"
                label="Surname"
                placeholder="Johnson"
                required
                filled
            ></v-text-field>

            <v-autocomplete
                v-model="values"
                :items="items"
                filled
                chips
                label="Like Categories"
                multiple
            ></v-autocomplete>

            <v-btn
            color="primary"
            @click="submit"
            >
            Continue
            </v-btn>

            <v-btn text @click="e1 = 2">
            Back
            </v-btn>
        </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Login',
    data() {
        return {
            e1: 1,
            errorMessages: '',
            show: false,
            username: null,
            password: null,
            name: null,
            surname: null,
            city: null,
            address: null,
            country: null,
            zip: null,
            email: null,
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            chips: [],
            items: ['Art', 'Hoodie', 'Shirt', 'Crop Tops', 'Pants', 'Longsleeves', 'Hat', 'Pin', 'Outwear', 'Colorful', 'Dark'],
            rules: {
                required: value => value || 'Required',
                min: v => v.length >= 8 || 'Minimum 8 characters'
            }
        }
    },
    computed: {
        form() {
            return {
                username: this.username,
                password: this.password,
                name: this.name,
                surname: this.surname,
                email: this.email,
                address: this.address,
                zip: this.zip,
                city: this.city,
                country: this.country,
                chips: this.chips
            } 
        }
    },
    watch: {
        name(){
            this.errorMessages = ''
        }
    },
    methods: {
        remove (item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
        },
        submit(){
            // Prosledi neke podatke beku
            this.$router.push('/')
        }
    },
}) 
</script>

<style>
.login-wrap{
    display: flex;
    justify-content: center;
    align-items: center;    
}
</style>