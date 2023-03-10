public with sharing class CourseDeliveryLocation {
    @AuraEnabled(cacheable=true) 
    public static List<AggregateResult> getLocations()  {
        return [SELECT City__c, Country__c, COUNT(Id) numDeliveries FROM Course_Delivery__c group by City__c, Country__c];
    }
}
