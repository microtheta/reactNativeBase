
export const theme = {
  headerBackgroud: '#3b5998',
  headerFontColor: '#fff',
  mainBackground: '#fff',
  mainFontColor: 'gray'
}

export const headerStyle = {
  headerMain: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.headerBackgroud
  },
  headerLeft: {
    flexDirection: 'row'
  },
  headerIconBtn: { 
    paddingRight: 5,
    paddingLeft:5,
    height: 50
  },
  headerIcon: {
    color: theme.headerFontColor
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20
  },
  headerRight: {
    width: 50
  }
}

export const appStyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.mainBackground,
  },
  welcome: {
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: theme.mainFontColor,
    marginBottom: 5,
  },
};
