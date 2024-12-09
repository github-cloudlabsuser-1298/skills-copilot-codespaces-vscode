# Connect to your Azure account
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "WestEurope"
$storageAccountName = "examplestoracc"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"