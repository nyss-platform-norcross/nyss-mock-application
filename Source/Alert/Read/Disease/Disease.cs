namespace Read.Disease
{
    public class Disease : Entity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public int ThresholdTimePeriodInDays { get; set; }
        public int ThresholdNumberOfCases { get; set; }
    }
}
