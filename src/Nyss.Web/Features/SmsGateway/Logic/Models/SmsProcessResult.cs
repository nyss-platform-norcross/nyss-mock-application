﻿using System.Collections.Generic;
using System.Linq;

namespace Nyss.Web.Features.SmsGateway.Logic.Models
{
    public class SmsProcessResult
    {
        public bool IsRequestValid => !RequestErrors.Any();
        public List<string> RequestErrors { get; set; }

        public string FeedbackMessage { get; set; }
        public string PhoneNumber { get; set; }

        public SmsProcessResult()
        {
            RequestErrors = new List<string>();
        }
    }
}
