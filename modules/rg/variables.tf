variable "location" {
    description ="The name of the Azure location"
    default ="westeurope"
    validation {
      condition = contains(["westeurope","westus"], var.location)
      error_message = "Invalid location"
    }
}