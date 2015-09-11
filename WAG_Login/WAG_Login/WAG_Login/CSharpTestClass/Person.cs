using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppGoTypeScript_X_Modulerization
{
    public class Person
    {
        public int x { get; set; }
        private int y;
    }

    public class ColorType
    {
        public CustomType Red { get; set; }
        public CustomType Green { get; set; }
        public CustomType Blue { get; set; }
    }

    public class CustomType
    {
        public int Value { get; set; }
    }
}