using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.Support.V7.App;
using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Newtonsoft.Json;
using System.Net.Http;



namespace App3
{
    [Activity(Label = "Activity1")]
    public class Activity1 : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            JSON json = new JSON();
            string start=null, end=null;
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.exercises);
            Button yog = FindViewById<Button>(Resource.Id.yoga);
            yog.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("yoga", start, end);
                }

            };
            Button cal = FindViewById<Button>(Resource.Id.calisthenics);
            cal.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("Calisthenics", start, end);
                }
            };
            Button cardio = FindViewById<Button>(Resource.Id.cardio);
            cardio.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("cardio", start, end);
                }
            };

            Button circuits = FindViewById<Button>(Resource.Id.circuits);
            circuits.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("circuits", start, end);
                }
            };
            Button weight = FindViewById<Button>(Resource.Id.weight);
            weight.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("losing_weight", start, end);
                }
            };
            Button muscle = FindViewById<Button>(Resource.Id.muscle);
            muscle.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addExercise("gaining_muscle", start, end);
                }
            };
            Button confirm = FindViewById<Button>(Resource.Id.confirm);
            confirm.Click += async delegate
            {
                //GlobalVariable globalVariable = ((GlobalVariable)Android.App.Application.Context);

                string message = "+13104876562";

                json.Phone_number = message;

                string output = JsonConvert.SerializeObject(json);
                Console.WriteLine(output);
                System.Diagnostics.Debug.Write(output);

                var client = new HttpClient();
                client.BaseAddress = new Uri("http://826337de.ngrok.io/");


                //var content = new StringContent(output);
                var content = new StringContent(output, Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync("/sms", content);

                // this result string should be something like: "{"token":"rgh2ghgdsfds"}"
                var result = await response.Content.ReadAsStringAsync();
                
              
                
            };


            EditText edittext = FindViewById<EditText>(Resource.Id.beg);
            edittext.KeyPress += (object sender, View.KeyEventArgs e) =>
            {
                e.Handled = false;
                if (e.Event.Action == KeyEventActions.Down && e.KeyCode == Keycode.Enter)
                {
                    start = edittext.Text;

                    e.Handled = true;

                }
            };
            EditText edittext2 = FindViewById<EditText>(Resource.Id.end);
            edittext2.KeyPress += (object sender, View.KeyEventArgs e) =>
            {
                e.Handled = false;
                if (e.Event.Action == KeyEventActions.Down && e.KeyCode == Keycode.Enter)
                {
                    end = edittext2.Text;

                    e.Handled = true;

                }
            };
        }
    }
}