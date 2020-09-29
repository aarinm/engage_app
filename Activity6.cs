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

namespace App3
{
    [Activity(Label = "Activity6")]
    public class Activity6 : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.time);
            // Create your application here
            Button eighta = FindViewById<Button>(Resource.Id.eighta);
            eighta.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button ninea = FindViewById<Button>(Resource.Id.ninea);
            ninea.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button tena = FindViewById<Button>(Resource.Id.tena);
            tena.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button elea = FindViewById<Button>(Resource.Id.elea);
            elea.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button twel = FindViewById<Button>(Resource.Id.twel);
            twel.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button one = FindViewById<Button>(Resource.Id.one);
            one.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
            Button two = FindViewById<Button>(Resource.Id.two);
            two.Click += delegate
            {
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            };
        }
    }
}