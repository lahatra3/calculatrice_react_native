import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    containerBefore: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#ff725e',
        zIndex: -2
    },

    // ========== HEADER ===========
    containerHeader: {
        position: 'relative',
        height: '31%',
    },
    containerHeaderBefore: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderWidth: 0,
        borderBottomStartRadius: 63,
        borderBottomEndRadius: 63,
        backgroundColor: '#ff725e',
        zIndex: -1
    },

    containerResultat: {
        position: 'absolute',
        top: '37%',
        transform: [{ translateY: -50}],
        width: '100%'
    },
    contentResultat: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        marginLeft: 17,
        marginRight: 17,
        paddingRight: 11,
        paddingLeft: 11,
        borderRadius: 19,
        overflow: 'scroll'
    },
    containerResultatText: {
        fontWeight: 'bold',
        fontSize: 47,
        marginTop: 7,
        marginBottom: 7,
    },

    // ============= SECTION ===========
    containerSection: {
        flex: 1,
        position: 'relative',
        height: '69%'
    },
    containerSectionBefore: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopStartRadius: 63,
        borderTopEndRadius: 63,
        zIndex: -1
    },

    containerSectionButton: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 37,
        paddingLeft: 19,
        paddingRight: 19,
        paddingBottom: 19
    },
    
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 3,
        marginBottom: 3
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff725e',
        borderRadius: 19,
        marginLeft: 3,
        marginRight: 3,
        height: '100%',
        backgroundColor: '#ff725e'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 31
    }
});
