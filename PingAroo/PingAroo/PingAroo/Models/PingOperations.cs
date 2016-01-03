using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace PingAroo.Models
{
    public class PingOperations
    {
       public string IpAddress { get; set; }
       public string IsError;
       public DateTime UpTime;
       public DateTime DownTime;

        public Ping PingSender = new Ping();

        public bool isPingStarted;
        public bool isPingCompleted = true;

       public bool IsUp;

        private static List<PingOperations> _checkList; 

       public static List<PingOperations> CheckList
        {
            get {
                if (_checkList == null) {
                    _checkList = new List<PingOperations>();
                }
                return _checkList;
            }
            set
            {
                _checkList = value;
            }
        }

        public void AddToCheckList( PingOperations checkIp )
        {
            CheckList.Add(checkIp);
        }

        public void RunTheCheckList()
        {
            // Get an object that will block the main thread.
            AutoResetEvent waiter = new AutoResetEvent(false);

            for (int i = 0; ;)
            {
                foreach (PingOperations p in PingOperations.CheckList)
                {
                 

                    //if (p.isPingCompleted == true)
                    {
                        p.isPingCompleted = false;
                        p.PingSender.PingCompleted += new PingCompletedEventHandler(p.PingCompletedCallback);
                    }

                    // Create a buffer of 32 bytes of data to be transmitted.
                    string data = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
                    byte[] buffer = Encoding.ASCII.GetBytes(data);

                    // Wait 10 seconds for a reply.
                    int timeout = 10000;

                    // Set options for transmission:
                    // The data can go through 64 gateways or routers
                    // before it is destroyed, and the data packet
                    // cannot be fragmented.
                    PingOptions options = new PingOptions(64, true);

                    // Send the ping asynchronously.
                    // Use the waiter as the user token.
                    // When the callback completes, it can wake up this thread.

                    Task.Factory.StartNew(() => {
                        p.PingSender.SendAsync(p.IpAddress, timeout, buffer, options, waiter);
                    });

                  
                }

                try
                {
                    waiter.WaitOne(1000);
                }
                catch
                {
                   
                }
                finally
                {
                    waiter.Close();
                }

                Thread.Sleep(6000);
            }
        }

        private void PingCompletedCallback(object sender, PingCompletedEventArgs e)
        {
            try
            {
                //string ip = (string)e.UserState;
                //if (e.Reply.Status == IPStatus.Success)
                //{
                //    string status = ip + "\t" + e.Reply.RoundtripTime + " ms";
                //}
            }
            catch (Exception ex)
            {

            }
        }
    }
}