﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nyss.Web.Utils;

namespace Nyss.Web.Features.AlertHistory
{    
    public class AlertHistoryController : BaseController
    {
        private readonly IAlertHistoryService alertHistoryService;

        public AlertHistoryController(IAlertHistoryService alertHistoryService)
        {
            this.alertHistoryService = alertHistoryService;
        }

        [HttpGet]
        public IActionResult Get([FromQuery]int numberOfWeeks = 52, [FromQuery] bool includeNoAlerts = true, [FromQuery] string startDate = null)
        {
            var result = alertHistoryService.GetAlertsHistory(numberOfWeeks, startDate, includeNoAlerts);
            return Ok(result);
        }
    }
}