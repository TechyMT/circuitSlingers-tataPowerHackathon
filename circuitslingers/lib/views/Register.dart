import 'package:circuitslingers/controller/credentialcontroller.dart';
import 'package:circuitslingers/models/textformfield.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Register extends StatelessWidget {
  final CredentialController controller = Get.put(CredentialController());
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  Register({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Image.asset(
            'assets/background.jpg',
            fit: BoxFit.cover,
            width: double.infinity,
            height: double.infinity,
            color: Colors.black.withOpacity(0.2),
            colorBlendMode: BlendMode.darken,
          ),
          SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 20),
                  const Text(
                    "Registration",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  TextFormField(
                    controller: controller.firstNameController,
                    decoration: const InputDecoration(
                      labelText: "First Name",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter your First Name';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: controller.lastNameController,
                    decoration: const InputDecoration(
                      labelText: "Last Name",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter your Last Name';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: controller.emailController,
                    decoration: const InputDecoration(
                      labelText: "Email",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter your Email';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: controller.phoneController,
                    decoration: const InputDecoration(
                      labelText: "Phone",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter your Phone';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  DropdownButtonFormField<String>(
                    items: countries.map((String country) {
                      return DropdownMenuItem<String>(
                        value: country,
                        child: Text(country),
                      );
                    }).toList(),
                    decoration: const InputDecoration(
                      labelText: "Country",
                    ),
                    validator: (value) {
                      if (value == null) {
                        return 'Please select a Country';
                      } else {
                        controller.countryController.text = value;
                      }
                      return null;
                    },
                    onChanged: (String? value) {},
                  ),
                  const SizedBox(height: 10),
                  DropdownButtonFormField<String>(
                    items: indianStates.map((String country) {
                      return DropdownMenuItem<String>(
                        value: country,
                        child: Text(country),
                      );
                    }).toList(),
                    decoration: const InputDecoration(
                      labelText: "States",
                    ),
                    validator: (value) {
                      if (value == null) {
                        return 'Please select a States';
                      } else {
                        controller.stateController.text = value;
                      }
                      return null;
                    },
                    onChanged: (String? value) {},
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: controller.cityController,
                    decoration: const InputDecoration(
                      labelText: "City",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter your City';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: controller.passwordController,
                    decoration: const InputDecoration(
                      labelText: "Password",
                    ),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Please enter yor Password';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () async {
                      if (_formKey.currentState!.validate()) {}
                    },
                    child: const Text("Register"),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
