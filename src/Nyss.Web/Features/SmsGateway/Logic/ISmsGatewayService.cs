﻿using System.Threading.Tasks;
using Nyss.Web.Features.SmsGateway.Logic.Models;

namespace Nyss.Web.Features.SmsGateway.Logic
{
    public interface ISmsGatewayService
    {
        Task<SmsProcessResult> SaveReportAsync(Sms sms);
    }
}