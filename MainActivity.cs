using Android.App;
using Android.OS;
using Android.Support.V7.App;
using Android.Runtime;
using Android.Widget;
using Android.Content;
using System;
using System.Collections;
using System.Collections.Generic;
using Newtonsoft.Json;
using Android.Views;
using System.Net.Http;
using System.Text;





namespace App3
{
   
    public class Exercise
    {
        public string name;
        public string start_time;
        public string end_time;
    }
    public class Art
    {
        public string name;
        public string start_time;
        public string end_time;
    }
    public class Music
    {
        public string name;
        public string start_time;
        public string end_time;
    }

    public class Language
    {
        public string name;
        public string start_time;
        public string end_time;
    }

    public class Cooking
    {
        public string name;
        public string start_time;
        public string end_time;
    }
    public static class Phonenumber
    {
        public static string phone_number;
        public static void setnumber(string phone)
        {
            phone_number = phone;
        }
        public static string getnumber()
        {
            return phone_number;
        }
    }

    public class Activity_
    {
        public List<Exercise> Exercise = new List<Exercise>();
        public List<Music> Music=new List<Music>();
        public List<Art> Art = new List<Art>();
        public List<Language> Language = new List<Language>();
        public List<Cooking> Cooking = new List<Cooking>();
        
       
        public void addExercise(string name, string start_time, string end_time)
        {
            Exercise newExercise = new Exercise();
            newExercise.name = name;
            newExercise.start_time = start_time;
            newExercise.end_time = end_time;
            Exercise.Add(newExercise);
        }
        public void addMusic(string name, string start_time, string end_time)
        {
            Music newMusic = new Music();
            newMusic.name = name;
            newMusic.start_time = start_time;
            newMusic.end_time = end_time;
            Music.Add(newMusic);
        }
        public void addArt(string name, string start_time, string end_time)
        {
            Art newArt = new Art();
            newArt.name = name;
            newArt.start_time = start_time;
            newArt.end_time = end_time;
            Art.Add(newArt);
        }
        public void addLanguage(string name, string start_time, string end_time)
        {
            Language newLanguage = new Language();
            newLanguage.name = name;
            newLanguage.start_time = start_time;
            newLanguage.end_time = end_time;
            Language.Add(newLanguage);
        }
        public void addCooking(string name, string start_time, string end_time)
        {
            Cooking newCooking = new Cooking();
            newCooking.name = name;
            newCooking.start_time = start_time;
            newCooking.end_time = end_time;
            Cooking.Add(newCooking);
        }
    }
    

    public class JSON
    {
        public string Phone_number;
        public Activity_ Activity = new Activity_();
       
    }


    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]

    
    public class MainActivity : AppCompatActivity
    {

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.activity_main);
            

            JSON json = new JSON();
            EditText edittext = FindViewById<EditText>(Resource.Id.editText);
            edittext.KeyPress +=  (object sender, View.KeyEventArgs e) =>
            {
                e.Handled = false;
                if (e.Event.Action == KeyEventActions.Down && e.KeyCode == Keycode.Enter)
                {
                    //json.Phone_number = "+"+ edittext.Text;

                    


                    e.Handled = true;

                }
                
                
            };
            

            
          

            Button button = FindViewById<Button>(Resource.Id.button);

           
            button.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity1));
                StartActivity(intent);
            };
            Button button1 = FindViewById<Button>(Resource.Id.button1);
           
            button1.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity2));
                StartActivity(intent);
            };
            Button button2 = FindViewById<Button>(Resource.Id.button2);
          
            button2.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity3));
                StartActivity(intent);
            };

            Button button3 = FindViewById<Button>(Resource.Id.button3);
          
            button3.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity4));
                StartActivity(intent);
            };

            Button button4 = FindViewById<Button>(Resource.Id.button4);
            
            button4.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity5));
                StartActivity(intent);
            };
           
            
        }
    }
}
