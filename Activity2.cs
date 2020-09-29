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
    [Activity(Label = "Activity2")]
    public class Activity2 : Activity
    {
        //JSON json = new JSON();
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.art);
            // Create your application here

            Button water = FindViewById<Button>(Resource.Id.water);
            water.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity6));
                StartActivity(intent);
            };
            Button oil = FindViewById<Button>(Resource.Id.oil);
            oil.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity6));
                StartActivity(intent);
            };
            Button sketch = FindViewById<Button>(Resource.Id.sketch);
            sketch.Click += delegate
            {
                var intent = new Intent(this, typeof(Activity6));
                StartActivity(intent);
            };
        }
    }
}