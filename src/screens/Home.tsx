import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { z } from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {};
const FormSchema1 = z.object({
  firstName: z
    .string()
    .min(20, { message: 'Must be 5 or more characters long' }),
  lastName: z.string(),
  // email: z.string(),
  // tier: z.string().refine((val) => val !== 'mouhib'),
});
type FormSchemaType1 = z.infer<typeof FormSchema1>;

const FormSchema2 = z.object({
  nom: z.string().min(20, { message: 'Must be 5 or more characters long' }),
  prenom: z.string(),
  // email: z.string(),
  // tier: z.string().refine((val) => val !== 'mouhib'),
});
type FormSchemaType2 = z.infer<typeof FormSchema2>;

const Home = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType1>({
    resolver: zodResolver(FormSchema1),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType1> = (data) => console.log(data);
  const onSubmit2: SubmitHandler<FormSchemaType2> = (data) => {
    console.log('data');
  };
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>}
      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit, () => {
          console.log('error');
        })}
      />

      {/* <Controller
        control={form2.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="nom"
      />
      {form2.formState.errors.nom && <Text>nom required.</Text>}

      <Controller
        control={form2.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="prenom"
      />
      {form2.formState.errors.prenom && <Text>prenom required.</Text>}
      <Button
        title="Submit2"
        onPress={form2.handleSubmit(() => console.log('kfkfjdkdjk'))}
      /> */}
    </View>
    // <View>

    //   <CustomInputText />
    //   <CustomInputText />
    //   <CustomInputText />
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
