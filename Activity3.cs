using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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
    [Activity(Label = "Activity3")]
    public class Activity3 : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            JSON json = new JSON();
            string start = null, end = null;
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.music);
            Button listen = FindViewById<Button>(Resource.Id.listen);
            listen.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addMusic("listen", start, end);
                }
            };
            Button learn = FindViewById<Button>(Resource.Id.oil);
            learn.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addMusic("learn", start, end);
                }
            };
            Button karaoke = FindViewById<Button>(Resource.Id.karoke);
            karaoke.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addMusic("karaoke", start, end);
                }
            };
            Button jam = FindViewById<Button>(Resource.Id.jam);
            jam.Click += delegate
            {
                if (start != null && end != null)
                {
                    json.Activity.addMusic("jam", start, end);
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
            // Create your application here
        }
    }
}