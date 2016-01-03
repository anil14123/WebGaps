using PingAroo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PingAroo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AllOperations()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(PingOperations checkIp)
        {
        
            PingOperations.CheckList.Add(checkIp);            

            return View("AllOperations");
        }

        [HttpPost]
        public ActionResult Run()
        {
            PingOperations p = new PingOperations();
            p.RunTheCheckList();

            return View("AllOperations");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}